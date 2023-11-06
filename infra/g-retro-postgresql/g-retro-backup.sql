--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-11-06 17:46:16 UTC

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
-- TOC entry 6 (class 2615 OID 16389)
-- Name: app; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA app;


ALTER SCHEMA app OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16401)
-- Name: board; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.board (
    id integer NOT NULL,
    title character varying NOT NULL,
    creation_date timestamp with time zone NOT NULL
);


ALTER TABLE app.board OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16408)
-- Name: board_section; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.board_section (
    board integer NOT NULL,
    section integer NOT NULL
);


ALTER TABLE app.board_section OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16420)
-- Name: message; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.message (
    id integer NOT NULL,
    text character varying NOT NULL,
    "user" integer NOT NULL,
    board integer NOT NULL,
    section integer NOT NULL,
    creation_date timestamp with time zone NOT NULL
);


ALTER TABLE app.message OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16411)
-- Name: section; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app.section (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE app.section OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16390)
-- Name: user; Type: TABLE; Schema: app; Owner: postgres
--

CREATE TABLE app."user" (
    id integer NOT NULL,
    emal character varying NOT NULL,
    password character varying NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    token character varying,
    creation_date timestamp with time zone NOT NULL
);


ALTER TABLE app."user" OWNER TO postgres;

--
-- TOC entry 3379 (class 0 OID 16401)
-- Dependencies: 217
-- Data for Name: board; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.board (id, title, creation_date) FROM stdin;
\.


--
-- TOC entry 3380 (class 0 OID 16408)
-- Dependencies: 218
-- Data for Name: board_section; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.board_section (board, section) FROM stdin;
\.


--
-- TOC entry 3382 (class 0 OID 16420)
-- Dependencies: 220
-- Data for Name: message; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.message (id, text, "user", board, section, creation_date) FROM stdin;
\.


--
-- TOC entry 3381 (class 0 OID 16411)
-- Dependencies: 219
-- Data for Name: section; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app.section (id, name) FROM stdin;
\.


--
-- TOC entry 3378 (class 0 OID 16390)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: app; Owner: postgres
--

COPY app."user" (id, emal, password, first_name, last_name, token, creation_date) FROM stdin;
\.


--
-- TOC entry 3223 (class 2606 OID 16407)
-- Name: board board_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board
    ADD CONSTRAINT board_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 16419)
-- Name: board_section board_section_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_pkey PRIMARY KEY (board, section);


--
-- TOC entry 3229 (class 2606 OID 16426)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 16417)
-- Name: section section_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.section
    ADD CONSTRAINT section_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 16398)
-- Name: user user_emal_key; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_emal_key UNIQUE (emal);


--
-- TOC entry 3219 (class 2606 OID 16396)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 16400)
-- Name: user user_token_key; Type: CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app."user"
    ADD CONSTRAINT user_token_key UNIQUE (token);


--
-- TOC entry 3230 (class 2606 OID 16442)
-- Name: board_section board_section_board_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_board_fkey FOREIGN KEY (board) REFERENCES app.board(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- TOC entry 3231 (class 2606 OID 16447)
-- Name: board_section board_section_section_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.board_section
    ADD CONSTRAINT board_section_section_fkey FOREIGN KEY (section) REFERENCES app.section(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- TOC entry 3232 (class 2606 OID 16432)
-- Name: message message_board_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_board_fkey FOREIGN KEY (board) REFERENCES app.board(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3233 (class 2606 OID 16437)
-- Name: message message_section_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_section_fkey FOREIGN KEY (section) REFERENCES app.section(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3234 (class 2606 OID 16427)
-- Name: message message_user_fkey; Type: FK CONSTRAINT; Schema: app; Owner: postgres
--

ALTER TABLE ONLY app.message
    ADD CONSTRAINT message_user_fkey FOREIGN KEY ("user") REFERENCES app."user"(id) MATCH FULL ON UPDATE RESTRICT ON DELETE RESTRICT;


-- Completed on 2023-11-06 17:46:16 UTC

--
-- PostgreSQL database dump complete
--

