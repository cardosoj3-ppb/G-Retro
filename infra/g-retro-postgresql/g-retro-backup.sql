--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-11-07 12:32:42 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 16389)
-- Name: app; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA app;


ALTER SCHEMA app OWNER TO postgres;

--
-- TOC entry 2 (class 3079 OID 16390)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16412)
-- Name: board; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.board (
    id character varying DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying NOT NULL,
    creation_date character varying NOT NULL
);


ALTER TABLE app.board OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16426)
-- Name: board_section; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.board_section (
    board character varying NOT NULL,
    section character varying NOT NULL
);


ALTER TABLE app.board_section OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16452)
-- Name: message; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.message (
    id character varying DEFAULT public.uuid_generate_v4() NOT NULL,
    text character varying NOT NULL,
    "user" character varying NOT NULL,
    board character varying NOT NULL,
    section character varying NOT NULL,
    creation_date timestamp with time zone NOT NULL
);


ALTER TABLE app.message OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16419)
-- Name: section; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.section (
    id character varying DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE app.section OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16401)
-- Name: user; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app."user" (
    id character varying DEFAULT public.uuid_generate_v4() NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    token character varying,
    creation_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE app."user" OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 16412)
-- Dependencies: 218
-- Data for Name: board; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.board (id, title, creation_date) FROM stdin;
\.


--
-- TOC entry 3397 (class 0 OID 16426)
-- Dependencies: 220
-- Data for Name: board_section; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.board_section (board, section) FROM stdin;
\.


--
-- TOC entry 3398 (class 0 OID 16452)
-- Dependencies: 221
-- Data for Name: message; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.message (id, text, "user", board, section, creation_date) FROM stdin;
\.


--
-- TOC entry 3396 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: section; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.section (id, name) FROM stdin;
\.


--
-- TOC entry 3394 (class 0 OID 16401)
-- Dependencies: 217
-- Data for Name: user; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app."user" (id, email, password, first_name, last_name, token, creation_date) FROM stdin;
\.


--
-- TOC entry 3239 (class 2606 OID 16418)
-- Name: board board_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board
    ADD CONSTRAINT board_pkey PRIMARY KEY (id);


--
-- TOC entry 3243 (class 2606 OID 16432)
-- Name: board_section board_section_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_pkey PRIMARY KEY (board);


--
-- TOC entry 3245 (class 2606 OID 16458)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 16425)
-- Name: section sections_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.section
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- TOC entry 3233 (class 2606 OID 16409)
-- Name: user user_email_key; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- TOC entry 3235 (class 2606 OID 16407)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 16411)
-- Name: user user_token_key; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_token_key UNIQUE (token);


--
-- TOC entry 3246 (class 2606 OID 16474)
-- Name: board_section board_section_board_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_board_fkey FOREIGN KEY (board) REFERENCES app.board(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- TOC entry 3247 (class 2606 OID 16479)
-- Name: board_section board_section_section_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_section_fkey FOREIGN KEY (section) REFERENCES app.section(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- TOC entry 3248 (class 2606 OID 16464)
-- Name: message message_board_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_board_fkey FOREIGN KEY (board) REFERENCES app.board(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3249 (class 2606 OID 16469)
-- Name: message message_section_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_section_fkey FOREIGN KEY (section) REFERENCES app.section(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3250 (class 2606 OID 16459)
-- Name: message message_user_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_user_fkey FOREIGN KEY ("user") REFERENCES app."user"(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


-- Completed on 2023-11-07 12:32:42 UTC

--
-- PostgreSQL database dump complete
--

