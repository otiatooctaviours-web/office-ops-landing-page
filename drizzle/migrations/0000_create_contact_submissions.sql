CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 email text NOT NULL,
 company text NOT NULL,
 phone text NOT NULL,
 team_size text NOT NULL,
 plan text NOT NULL,
 message text NOT NULL
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_submissions_email_created_idx ON public.contact_submissions (email, created_at DESC);
CREATE FUNCTION public.limit_contact_submissions() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(lower(NEW.email)));
 IF (SELECT count(*) FROM public.contact_submissions WHERE lower(email) = lower(NEW.email) AND created_at > now() - interval '1 hour') >= 3 THEN
 RAISE EXCEPTION 'Please wait before sending another request.';
 END IF;
 RETURN NEW;
END;
$$;
CREATE TRIGGER contact_submission_limit BEFORE INSERT ON public.contact_submissions FOR EACH ROW EXECUTE FUNCTION public.limit_contact_submissions();