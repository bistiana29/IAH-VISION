--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2025-05-30 20:12:48

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 17255)
-- Name: ahh; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ahh (
    id_ahh text NOT NULL,
    id_provinsi integer,
    ahh_2010 double precision,
    ahh_2011 double precision,
    ahh_2012 double precision,
    ahh_2013 double precision,
    ahh_2014 double precision,
    ahh_2015 double precision,
    ahh_2016 double precision,
    ahh_2017 double precision,
    ahh_2018 double precision,
    ahh_2019 double precision,
    ahh_2020 double precision,
    ahh_2021 double precision,
    ahh_2022 double precision,
    ahh_2023 double precision,
    ahh_2024 double precision
);


ALTER TABLE public.ahh OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17267)
-- Name: ahs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ahs (
    id_ahs text NOT NULL,
    id_provinsi integer,
    ahs_2010 double precision,
    ahs_2011 double precision,
    ahs_2012 double precision,
    ahs_2013 double precision,
    ahs_2014 double precision,
    ahs_2015 double precision,
    ahs_2016 double precision,
    ahs_2017 double precision,
    ahs_2018 double precision,
    ahs_2019 double precision,
    ahs_2020 double precision,
    ahs_2021 double precision,
    ahs_2022 double precision,
    ahs_2023 double precision,
    ahs_2024 double precision
);


ALTER TABLE public.ahs OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 17315)
-- Name: cluster; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cluster (
    id_cluster text NOT NULL,
    id_provinsi integer,
    cluster_2010 integer,
    cluster_2011 integer,
    cluster_2012 integer,
    cluster_2013 integer,
    cluster_2014 integer,
    cluster_2015 integer,
    cluster_2016 integer,
    cluster_2017 integer,
    cluster_2018 integer,
    cluster_2019 integer,
    cluster_2020 integer,
    cluster_2021 integer,
    cluster_2022 integer,
    cluster_2023 integer,
    cluster_2024 integer
);


ALTER TABLE public.cluster OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17291)
-- Name: ipm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ipm (
    id_ipm text NOT NULL,
    id_provinsi integer,
    ipm_2010 double precision,
    ipm_2011 double precision,
    ipm_2012 double precision,
    ipm_2013 double precision,
    ipm_2014 double precision,
    ipm_2015 double precision,
    ipm_2016 double precision,
    ipm_2017 double precision,
    ipm_2018 double precision,
    ipm_2019 double precision,
    ipm_2020 double precision,
    ipm_2021 double precision,
    ipm_2022 double precision,
    ipm_2023 double precision,
    ipm_2024 double precision
);


ALTER TABLE public.ipm OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 17303)
-- Name: ppk; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ppk (
    id_ppk text NOT NULL,
    id_provinsi integer,
    ppk_2010 double precision,
    ppk_2011 double precision,
    ppk_2012 double precision,
    ppk_2013 double precision,
    ppk_2014 double precision,
    ppk_2015 double precision,
    ppk_2016 double precision,
    ppk_2017 double precision,
    ppk_2018 double precision,
    ppk_2019 double precision,
    ppk_2020 double precision,
    ppk_2021 double precision,
    ppk_2022 double precision,
    ppk_2023 double precision,
    ppk_2024 double precision
);


ALTER TABLE public.ppk OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17249)
-- Name: provinsi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinsi (
    id_provinsi integer NOT NULL,
    provinsi character varying(255)
);


ALTER TABLE public.provinsi OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 17248)
-- Name: provinsi_id_provinsi_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provinsi_id_provinsi_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provinsi_id_provinsi_seq OWNER TO postgres;

--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 214
-- Name: provinsi_id_provinsi_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provinsi_id_provinsi_seq OWNED BY public.provinsi.id_provinsi;


--
-- TOC entry 218 (class 1259 OID 17279)
-- Name: rls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rls (
    id_rls text NOT NULL,
    id_provinsi integer,
    rls_2010 double precision,
    rls_2011 double precision,
    rls_2012 double precision,
    rls_2013 double precision,
    rls_2014 double precision,
    rls_2015 double precision,
    rls_2016 double precision,
    rls_2017 double precision,
    rls_2018 double precision,
    rls_2019 double precision,
    rls_2020 double precision,
    rls_2021 double precision,
    rls_2022 double precision,
    rls_2023 double precision,
    rls_2024 double precision
);


ALTER TABLE public.rls OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 17337)
-- Name: umpan_baliks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.umpan_baliks (
    id_umpan_balik integer NOT NULL,
    umpan_balik text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    nama character varying(255),
    email character varying(255)
);


ALTER TABLE public.umpan_baliks OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 17336)
-- Name: umpan_baliks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.umpan_baliks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.umpan_baliks_id_seq OWNER TO postgres;

--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 222
-- Name: umpan_baliks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.umpan_baliks_id_seq OWNED BY public.umpan_baliks.id_umpan_balik;


--
-- TOC entry 3202 (class 2604 OID 17252)
-- Name: provinsi id_provinsi; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinsi ALTER COLUMN id_provinsi SET DEFAULT nextval('public.provinsi_id_provinsi_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 17340)
-- Name: umpan_baliks id_umpan_balik; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.umpan_baliks ALTER COLUMN id_umpan_balik SET DEFAULT nextval('public.umpan_baliks_id_seq'::regclass);


--
-- TOC entry 3371 (class 0 OID 17255)
-- Dependencies: 216
-- Data for Name: ahh; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ahh (id_ahh, id_provinsi, ahh_2010, ahh_2011, ahh_2012, ahh_2013, ahh_2014, ahh_2015, ahh_2016, ahh_2017, ahh_2018, ahh_2019, ahh_2020, ahh_2021, ahh_2022, ahh_2023, ahh_2024) FROM stdin;
AHH001	1	69.13	69.205	69.27	69.35	69.39	69.54	69.565	69.585	69.7	69.915	69.975	70.005	70.21	70.385	70.485
AHH002	2	67.51	67.685	67.855	67.985	68.085	68.335	68.385	68.39	68.625	68.995	69.15	69.28	69.63	70.03	70.33
AHH003	3	67.64	67.84	68.05	68.255	68.36	68.7	68.775	68.82	69.045	69.355	69.52	69.635	69.94	70.24	70.38
AHH004	4	70.2	70.365	70.535	70.715	70.805	70.975	71	71.02	71.22	71.525	71.65	71.72	71.965	72.285	72.57
AHH005	5	69.935	70.085	70.24	70.395	70.475	70.605	70.655	70.71	70.845	71.04	71.17	71.26	71.53	71.82	72.09
AHH006	6	68.395	68.555	68.72	68.89	68.97	69.19	69.22	69.23	69.46	69.705	69.93	70.03	70.335	70.71	70.975
AHH007	7	67.865	68.03	68.21	68.375	68.41	68.54	68.555	68.575	68.825	69.205	69.37	69.47	69.71	69.965	70.18
AHH008	8	68.955	69.165	69.38	69.595	69.7	69.94	69.965	69.975	70.205	70.56	70.695	70.775	71.02	71.295	71.55
AHH009	9	69.195	69.36	69.525	69.69	69.77	69.93	69.965	69.985	70.215	70.545	70.68	70.78	71.015	71.28	71.535
AHH010	10	68.465	68.675	68.895	69.1	69.2	69.46	69.49	69.5	69.66	69.825	69.99	70.155	70.525	70.965	71.285
AHH011	11	71.755	71.91	72.075	72.24	72.32	72.48	72.565	72.595	72.715	72.82	72.95	73.06	73.335	73.745	74.18
AHH012	12	71.335	71.605	71.87	72.135	72.265	72.45	72.48	72.5	72.69	72.92	73.15	73.38	73.625	74.1	74.41
AHH013	13	72.775	72.955	73.14	73.325	73.92	74	74.045	74.09	74.19	74.245	74.405	74.515	74.62	74.785	75.1
AHH014	14	74.21	74.305	74.405	74.495	74.54	74.72	74.73	74.76	74.84	74.945	75.025	75.08	75.105	75.215	75.53
AHH015	15	69.945	70.07	70.19	70.39	70.5	70.73	70.74	70.76	70.93	71.225	71.345	71.43	71.76	72.16	72.395
AHH016	16	68.54	68.72	68.905	69.085	69.175	69.475	69.49	69.52	69.67	69.89	70.005	70.07	70.41	70.82	71.065
AHH017	17	70.66	70.825	70.985	71.155	71.24	71.4	71.435	71.465	71.685	72	72.155	72.28	72.61	73.03	73.34
AHH018	18	63.86	64.18	64.48	64.79	64.945	65.425	65.47	65.495	65.815	66.24	66.51	66.735	67.105	67.52	67.78
AHH019	19	65.33	65.5	65.685	65.86	65.945	66	66.045	66.08	66.395	66.895	67.055	67.195	67.485	67.81	68.035
AHH020	20	69.11	69.315	69.515	69.71	69.805	69.92	69.94	69.95	70.21	70.61	70.735	70.805	71.04	71.365	71.6
AHH021	21	69.07	69.155	69.255	69.32	69.43	69.58	69.585	69.595	69.645	69.695	69.75	69.805	70.05	70.325	70.475
AHH022	22	66.695	66.925	67.16	67.395	67.51	67.84	67.88	67.965	68.175	68.5	68.69	68.88	69.18	69.47	69.695
AHH023	23	72.935	73.15	73.365	73.57	73.675	73.705	73.72	73.74	74	74.27	74.375	74.65	74.66	74.79	75.055
AHH024	24	70.45	70.6	70.75	70.9	70.975	71.03	71.04	71.06	71.28	71.63	71.745	71.805	72.1	72.45	72.745
AHH025	25	66.12	66.435	66.75	67.065	67.225	67.3	67.335	67.345	67.805	68.29	68.745	68.88	68.965	69.22	69.465
AHH026	26	68.975	69.16	69.355	69.545	69.64	69.845	69.89	69.91	70.15	70.48	70.62	70.71	70.995	71.26	71.48
AHH027	27	69.695	69.9	70.11	70.325	70.43	70.48	70.505	70.52	70.77	71.16	71.34	71.36	71.455	71.525	71.65
AHH028	28	66.46	66.635	66.805	66.97	67.055	67.17	67.19	67.21	67.52	67.975	68.115	68.24	68.545	68.885	69.14
AHH029	29	62.545	62.82	63.09	63.37	64.09	64.27	64.345	64.375	64.615	64.87	65.11	65.29	65.67	66.055	66.32
AHH030	30	64.505	64.66	64.82	64.97	65.045	65.345	65.39	65.44	65.63	65.87	66.025	66.14	66.48	66.835	67.005
AHH031	31	66.745	66.925	67.1	67.295	67.395	67.49	67.515	67.545	67.805	68.21	68.375	68.495	68.815	69.155	69.32
AHH032	32	64.635	64.8	64.93	65.095	65.18	65.23	65.24	65.265	65.5	65.895	66.05	66.19	66.49	66.845	67.1
AHH033	33	64.35	64.5	64.645	64.805	64.885	65.135	65.215	65.225	65.445	65.69	65.835	65.97	66.25	66.49	68.775
AHH034	34	69.86	70.055	70.255	70.45	70.73	70.855	70.945	71.11	71.245	71.385	71.525	71.61	71.88	72.175	72.265
\.


--
-- TOC entry 3372 (class 0 OID 17267)
-- Dependencies: 217
-- Data for Name: ahs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ahs (id_ahs, id_provinsi, ahs_2010, ahs_2011, ahs_2012, ahs_2013, ahs_2014, ahs_2015, ahs_2016, ahs_2017, ahs_2018, ahs_2019, ahs_2020, ahs_2021, ahs_2022, ahs_2023, ahs_2024) FROM stdin;
AHS001	1	12.9	13.03	13.19	13.36	13.53	13.73	13.89	14.13	14.27	14.3	14.31	14.36	14.37	14.38	14.39
AHS002	2	11.82	11.83	11.97	12.41	12.61	12.82	13	13.1	13.14	13.15	13.23	13.27	13.31	13.48	13.49
AHS003	3	12.22	12.52	12.81	13.16	13.48	13.6	13.79	13.94	13.95	14.01	14.02	14.09	14.1	14.11	14.3
AHS004	4	11.76	11.78	11.79	12.27	12.45	12.74	12.86	13.03	13.11	13.14	13.2	13.28	13.29	13.3	13.42
AHS005	5	11.34	11.6	11.73	12.17	12.38	12.57	12.72	12.87	12.9	12.93	12.98	13.04	13.05	13.13	13.14
AHS006	6	11.03	11.21	11.42	11.46	11.75	12.02	12.23	12.35	12.36	12.39	12.45	12.54	12.55	12.63	12.64
AHS007	7	11.59	11.88	12.2	12.78	13.01	13.18	13.38	13.57	13.58	13.59	13.61	13.67	13.68	13.74	13.75
AHS008	8	10.88	11.04	11.37	11.9	12.24	12.25	12.35	12.46	12.61	12.63	12.65	12.73	12.74	12.77	12.78
AHS009	9	10.48	10.7	10.79	10.96	11.18	11.6	11.71	11.83	11.87	11.94	12.05	12.17	12.18	12.31	12.49
AHS010	10	11.51	11.61	11.9	12.26	12.51	12.6	12.66	12.81	12.82	12.83	12.87	12.98	12.99	13.05	13.27
AHS011	11	11.86	11.91	11.96	12.24	12.38	12.59	12.73	12.86	12.95	12.97	12.98	13.07	13.08	13.33	13.51
AHS012	12	10.69	10.91	11.24	11.81	12.08	12.15	12.3	12.42	12.45	12.48	12.5	12.61	12.62	12.68	12.8
AHS013	13	11.09	11.18	11.39	11.89	12.17	12.38	12.45	12.57	12.63	12.68	12.7	12.77	12.81	12.85	12.86
AHS014	14	14.15	14.61	14.64	14.67	14.85	15.03	15.23	15.42	15.56	15.58	15.59	15.64	15.65	15.66	15.7
AHS015	15	11.49	11.62	11.74	12.17	12.45	12.66	12.98	13.09	13.1	13.16	13.19	13.36	13.37	13.38	13.43
AHS016	16	11.02	11.41	11.79	12.05	12.31	12.35	12.7	12.78	12.85	12.88	12.89	13.02	13.05	13.09	13.1
AHS017	17	11.71	12.12	12.26	12.4	12.64	12.97	13.04	13.21	13.23	13.27	13.33	13.4	13.48	13.58	13.62
AHS018	18	11.66	11.97	12.21	12.46	12.73	13.04	13.16	13.46	13.47	13.48	13.7	13.9	13.96	13.97	13.98
AHS019	19	10.85	11.55	11.73	12.27	12.65	12.84	12.97	13.07	13.1	13.15	13.18	13.2	13.21	13.22	13.23
AHS020	20	10.79	10.8	11.11	11.6	11.89	12.25	12.37	12.5	12.55	12.58	12.6	12.65	12.66	12.67	12.68
AHS021	21	11.09	11.15	11.22	11.71	11.93	12.22	12.33	12.45	12.55	12.57	12.66	12.74	12.75	12.76	12.77
AHS022	22	10.86	11.14	11.54	11.67	11.96	12.21	12.29	12.46	12.5	12.52	12.68	12.81	12.82	12.86	12.87
AHS023	23	11.87	12.06	12.46	12.85	13.17	13.18	13.35	13.49	13.67	13.69	13.72	13.81	13.84	14.02	14.03
AHS024	24	11.34	11.5	11.77	11.88	12.16	12.43	12.55	12.66	12.68	12.73	12.85	12.94	12.95	12.96	12.97
AHS025	25	11.17	11.82	12.09	12.36	12.71	12.72	12.92	13.04	13.13	13.14	13.17	13.23	13.32	13.33	13.34
AHS026	26	11.47	11.82	12.16	12.52	12.9	12.99	13.16	13.28	13.34	13.36	13.45	13.52	13.53	13.54	13.55
AHS027	27	12.15	12.3	12.45	12.45	12.78	13.07	13.24	13.36	13.53	13.55	13.65	13.68	13.69	13.7	13.71
AHS028	28	11.12	11.68	11.78	12.13	12.49	12.7	12.88	13.01	13.03	13.06	13.08	13.11	13.12	13.16	13.17
AHS029	29	10.58	11.21	11.28	11.46	11.78	12.22	12.34	12.48	12.59	12.62	12.77	12.86	12.87	12.88	12.89
AHS030	30	12.62	12.85	12.96	13.35	13.53	13.56	13.73	13.91	13.92	13.94	13.96	13.97	14	14.08	14.09
AHS031	31	11.74	11.79	12.19	12.48	12.72	13.1	13.45	13.56	13.62	13.63	13.67	13.68	13.73	13.74	13.75
AHS032	32	11.1	11.21	11.45	11.67	11.87	12.06	12.26	12.47	12.53	12.72	12.91	13.13	13.21	13.34	13.17
AHS033	33	8.57	8.92	9.11	9.58	9.94	9.95	10.23	10.54	10.83	11.05	11.08	11.11	11.14	11.15	13.72
AHS034	34	11.29	11.44	11.68	12.1	12.39	12.55	12.72	12.85	12.91	12.95	12.98	13.08	13.1	13.15	13.21
\.


--
-- TOC entry 3376 (class 0 OID 17315)
-- Dependencies: 221
-- Data for Name: cluster; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cluster (id_cluster, id_provinsi, cluster_2010, cluster_2011, cluster_2012, cluster_2013, cluster_2014, cluster_2015, cluster_2016, cluster_2017, cluster_2018, cluster_2019, cluster_2020, cluster_2021, cluster_2022, cluster_2023, cluster_2024) FROM stdin;
CLUST002	2	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST003	3	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST004	4	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST005	5	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST006	6	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST007	7	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST008	8	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST009	9	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST010	10	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST011	11	0	0	0	0	0	1	1	1	0	0	0	0	0	1	0
CLUST012	12	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST013	13	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST001	1	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST014	14	0	1	0	0	0	0	1	1	0	0	0	0	0	1	0
CLUST015	15	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST016	16	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST017	17	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST018	18	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST019	19	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST020	20	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST021	21	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST022	22	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST023	23	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST024	24	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST025	25	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST026	26	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST027	27	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST028	28	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST029	29	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST030	30	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST031	31	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST032	32	0	0	1	0	0	0	0	0	1	1	1	1	1	0	1
CLUST033	33	1	0	1	1	1	0	0	0	1	1	1	1	1	0	1
\.


--
-- TOC entry 3374 (class 0 OID 17291)
-- Dependencies: 219
-- Data for Name: ipm; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ipm (id_ipm, id_provinsi, ipm_2010, ipm_2011, ipm_2012, ipm_2013, ipm_2014, ipm_2015, ipm_2016, ipm_2017, ipm_2018, ipm_2019, ipm_2020, ipm_2021, ipm_2022, ipm_2023, ipm_2024) FROM stdin;
IPM001	1	67.09	67.45	67.81	68.3	68.81	69.45	70	70.6	71.19	71.9	71.99	72.18	72.8	73.4	74.03
IPM002	2	67.09	67.34	67.74	68.36	68.87	69.51	70	70.57	71.18	71.74	71.77	72	72.71	73.37	74.02
IPM003	3	67.25	67.81	68.36	68.91	69.36	69.98	70.73	71.24	71.73	72.39	72.38	72.65	73.26	73.75	74.49
IPM004	4	68.65	68.9	69.15	69.91	70.33	70.84	71.2	71.79	72.44	73	72.71	72.94	73.52	74.04	74.79
IPM005	5	65.39	66.14	66.94	67.76	68.24	68.89	69.62	69.99	70.65	71.26	71.29	71.63	72.14	72.77	73.43
IPM006	6	64.44	65.12	65.79	66.16	66.75	67.46	68.24	68.86	69.39	70.02	70.01	70.24	70.9	71.62	72.3
IPM007	7	65.35	65.96	66.61	67.5	68.06	68.59	69.33	69.95	70.64	71.21	71.4	71.64	72.16	72.78	73.39
IPM008	8	63.71	64.2	64.87	65.73	66.42	66.95	67.65	68.25	69.02	69.57	69.69	69.9	70.45	71.15	71.81
IPM009	9	66.02	66.59	67.21	67.92	68.27	68.27	69.55	69.99	70.67	71.3	71.47	71.69	72.24	72.85	73.33
IPM010	10	71.13	71.61	72.36	73.02	73.4	73.75	73.99	74.45	74.84	75.48	75.59	75.79	76.46	77.11	77.97
IPM011	11	76.31	76.98	77.53	78.08	78.39	78.99	79.6	80.06	80.47	80.76	80.77	81.11	81.65	82.46	83.08
IPM012	12	66.15	66.67	67.32	68.25	68.8	69.5	70.05	70.69	71.3	72.03	72.09	72.45	73.12	73.74	74.43
IPM013	13	66.08	66.64	67.21	68.02	68.78	69.49	69.98	70.52	71.12	71.73	71.87	72.16	72.79	73.39	73.88
IPM014	14	75.37	75.93	76.15	76.44	76.81	77.59	78.38	78.89	79.53	79.99	79.97	80.22	80.64	81.07	81.55
IPM015	15	65.36	66.06	66.74	67.55	68.14	68.95	69.74	70.27	70.77	71.5	71.71	72.14	72.75	73.38	74.09
IPM016	16	67.54	68.22	68.92	69.47	69.89	70.27	70.96	71.42	71.95	72.44	72.45	72.72	73.32	73.87	74.48
IPM017	17	70.1	70.87	71.62	72.09	72.48	73.27	73.65	74.3	74.77	75.38	75.5	75.69	76.44	77.1	77.76
IPM018	18	61.16	62.14	62.98	63.76	64.31	65.19	65.81	66.58	67.3	68.14	68.25	68.65	69.46	70.2	70.93
IPM019	19	59.21	60.24	60.81	61.68	62.26	62.67	63.13	63.73	64.39	65.23	65.19	65.28	65.9	66.68	67.39
IPM020	20	61.97	62.35	63.41	64.3	64.89	65.59	65.88	66.26	66.98	67.65	67.66	67.9	68.63	69.41	70.13
IPM021	21	65.96	66.38	66.66	67.41	67.77	68.53	69.13	69.79	70.42	70.91	71.05	71.25	71.63	72.2	72.73
IPM022	22	65.2	65.89	66.68	67.17	67.63	68.38	69.05	69.65	70.17	70.72	70.91	71.28	71.84	72.5	73.03
IPM023	23	71.31	72.02	72.62	73.21	73.82	74.17	74.59	75.12	75.83	76.61	76.24	76.88	77.44	78.2	78.83
IPM024	24	67.83	68.31	69.04	69.49	69.96	70.39	71.05	71.66	72.2	72.99	72.93	73.3	73.81	74.36	75.03
IPM025	25	63.29	64.27	65	65.79	66.43	66.76	67.47	68.11	68.88	69.5	69.55	69.79	70.28	70.95	71.56
IPM026	26	66	66.65	67.26	67.92	68.49	69.15	69.76	70.34	70.9	71.66	71.93	72.24	72.82	73.46	74.05
IPM027	27	65.99	66.52	67.07	67.55	68.07	68.75	69.31	69.86	70.61	71.2	71.45	71.66	72.23	72.79	73.48
IPM028	28	62.65	63.48	64.16	64.7	65.17	65.86	66.29	67.01	67.71	68.49	68.68	69	69.81	70.45	71.23
IPM029	29	59.74	60.63	61.01	61.53	62.24	62.96	63.6	64.3	65.1	65.73	66.11	66.36	66.92	67.55	68.2
IPM030	30	64.27	64.75	65.43	66.09	66.74	67.05	67.6	68.19	68.87	69.45	69.49	69.71	70.22	70.94	71.57
IPM031	31	62.79	63.19	63.93	64.78	65.18	65.91	66.63	67.2	67.76	68.7	68.49	68.76	69.47	70.21	71.03
IPM032	32	59.6	59.9	60.3	60.91	61.28	61.73	62.21	62.99	63.74	64.7	65.09	65.26	65.16	66.16	67.02
IPM033	33	54.45	55.01	55.55	56.25	56.75	57.25	58.05	59.09	60.06	60.84	60.44	60.62	71.76	72.41	73
IPM034	34	66.53	67.09	67.7	68.31	68.9	69.55	70.18	70.81	71.39	71.92	71.94	72.29	72.91	73.55	74.2
\.


--
-- TOC entry 3375 (class 0 OID 17303)
-- Dependencies: 220
-- Data for Name: ppk; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ppk (id_ppk, id_provinsi, ppk_2010, ppk_2011, ppk_2012, ppk_2013, ppk_2014, ppk_2015, ppk_2016, ppk_2017, ppk_2018, ppk_2019, ppk_2020, ppk_2021, ppk_2022, ppk_2023, ppk_2024) FROM stdin;
PPK001	1	7.934	8.044	8.134	8.289	8.297	8.533	8.768	8.957	9.186	9.603	9.492	9.572	9.963	10.334	10.811
PPK002	2	9.196	9.231	9.266	9.309	9.391	9.563	9.744	10.036	10.391	10.649	10.42	10.499	10.848	11.049	11.46
PPK003	3	9.339	9.409	9.479	9.57	9.621	9.804	10.126	10.306	10.638	10.925	10.733	10.79	11.13	11.38	11.718
PPK004	4	9.857	9.957	10.058	10.18	10.262	10.364	10.465	10.677	10.968	11.255	10.675	10.736	11.158	11.448	11.857
PPK005	5	8.478	8.664	8.944	9.066	9.141	9.446	9.795	9.88	10.357	10.592	10.392	10.588	10.871	11.16	11.621
PPK006	6	8.536	8.803	9.04	9.231	9.302	9.474	9.935	10.22	10.652	10.937	10.652	10.662	11.109	11.472	12.015
PPK007	7	8.459	8.572	8.682	8.803	8.864	9.123	9.492	9.778	10.162	10.409	10.38	10.487	10.84	11.172	11.733
PPK008	8	7.964	8.118	8.273	8.415	8.476	8.729	9.156	9.413	9.858	10.114	9.982	10.038	10.336	10.769	11.258
PPK009	9	10.707	10.808	11.218	11.657	11.691	11.781	11.96	12.066	12.666	12.959	12.794	12.819	13.358	13.589	13.667
PPK010	10	12.267	12.513	12.74	12.942	13.019	13.177	13.359	13.566	13.976	14.466	14.209	14.122	14.469	14.998	15.573
PPK011	11	15.111	15.943	16.613	16.828	16.898	17.075	17.468	17.707	18.128	18.527	18.227	18.52	18.927	19.373	19.953
PPK012	12	9.174	9.249	9.325	9.421	9.447	9.778	10.035	10.285	10.79	11.152	10.845	10.934	11.277	11.695	12.157
PPK013	13	8.992	9.296	9.497	9.618	9.64	9.93	10.153	10.377	10.777	11.102	10.93	11.034	11.377	11.835	12.276
PPK014	14	12.08	12.115	12.137	12.261	12.294	12.684	13.229	13.521	13.946	14.394	14.015	14.111	14.482	14.924	15.361
PPK015	15	9.002	9.396	9.797	9.978	10.012	10.383	10.715	10.973	11.38	11.739	11.601	11.707	11.992	12.421	12.852
PPK016	16	10.777	10.933	11.008	11.061	11.15	11.261	11.469	11.659	11.994	12.267	11.964	12.033	12.216	12.601	13.097
PPK017	17	12.074	12.307	12.53	12.738	12.831	13.078	13.279	13.573	13.886	14.146	13.929	13.82	13.942	14.382	14.92
PPK018	18	8.707	8.759	8.853	8.95	8.987	9.241	9.575	9.877	10.284	10.64	10.351	10.377	10.681	11.095	11.606
PPK019	19	6.615	6.678	6.785	6.899	6.934	7.003	7.122	7.35	7.566	7.769	7.598	7.554	7.877	8.248	8.534
PPK020	20	7.654	7.825	8.002	8.127	8.175	8.279	8.348	8.472	8.86	9.055	8.93	8.974	9.355	9.81	10.321
PPK021	21	9.257	9.472	9.557	9.641	9.682	9.809	10.155	10.492	10.931	11.236	11.154	11.182	11.458	11.878	12.303
PPK022	22	10.304	10.437	10.553	10.655	10.748	10.891	11.307	11.6	12.062	12.253	12.032	12.143	12.469	12.953	13.399
PPK023	23	10.79	10.927	10.944	10.981	11.019	11.229	11.355	11.612	11.917	12.359	11.728	12.116	12.641	13.202	13.793
PPK024	24	8.935	9.113	9.43	9.583	9.628	9.729	10.148	10.422	10.731	11.115	10.791	10.882	11.179	11.497	11.998
PPK025	25	7.988	8.077	8.286	8.501	8.602	8.768	9.034	9.311	9.488	9.604	9.335	9.378	9.696	10.149	10.536
PPK026	26	9.331	9.459	9.56	9.632	9.723	9.992	10.281	10.489	10.814	11.118	11.079	11.184	11.43	11.841	12.275
PPK027	27	8.126	8.249	8.396	8.537	8.555	8.697	8.871	9.094	9.262	9.436	9.331	9.381	9.708	10.117	10.606
PPK028	28	8.207	8.293	8.673	8.719	8.762	9.035	9.175	9.532	9.839	10.075	10.02	10.157	10.687	11.069	11.539
PPK029	29	8.003	8.049	8.091	8.148	8.17	8.26	8.45	8.736	9.051	9.235	9.168	9.153	9.358	9.718	10.208
PPK030	30	7.362	7.437	7.727	7.872	7.925	8.026	8.215	8.433	8.721	8.887	8.732	8.77	8.876	9.278	9.684
PPK031	31	6.813	6.935	7.059	7.2	7.234	7.423	7.545	7.792	7.98	8.308	8.032	8.14	8.398	8.834	9.32
PPK032	32	6.677	6.709	6.732	6.896	6.944	7.064	7.175	7.493	7.816	8.125	8.086	7.929	8.101	8.404	8.805
PPK033	33	6.251	6.303	6.349	6.394	6.416	6.469	6.637	6.996	7.159	7.336	6.954	6.955	7.146	7.562	11.037
PPK034	34	9.437	9.647	9.815	9.858	9.903	10.15	10.42	10.664	11.059	11.299	11.013	11.156	11.479	11.899	12.341
\.


--
-- TOC entry 3370 (class 0 OID 17249)
-- Dependencies: 215
-- Data for Name: provinsi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provinsi (id_provinsi, provinsi) FROM stdin;
1	ACEH
2	SUMATERA UTARA
3	SUMATERA BARAT
4	RIAU
5	JAMBI
6	SUMATERA SELATAN
7	BENGKULU
8	LAMPUNG
9	KEP. BANGKA BELITUNG
10	KEP. RIAU
11	DKI JAKARTA
12	JAWA BARAT
13	JAWA TENGAH
14	DI YOGYAKARTA
15	JAWA TIMUR
16	BANTEN
17	BALI
18	NUSA TENGGARA BARAT
19	NUSA TENGGARA TIMUR
20	KALIMANTAN BARAT
21	KALIMANTAN TENGAH
22	KALIMANTAN SELATAN
23	KALIMANTAN TIMUR
24	SULAWESI UTARA
25	SULAWESI TENGAH
26	SULAWESI SELATAN
27	SULAWESI TENGGARA
28	GORONTALO
29	SULAWESI BARAT
30	MALUKU
31	MALUKU UTARA
32	PAPUA BARAT
33	PAPUA
34	INDONESIA
\.


--
-- TOC entry 3373 (class 0 OID 17279)
-- Dependencies: 218
-- Data for Name: rls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rls (id_rls, id_provinsi, rls_2010, rls_2011, rls_2012, rls_2013, rls_2014, rls_2015, rls_2016, rls_2017, rls_2018, rls_2019, rls_2020, rls_2021, rls_2022, rls_2023, rls_2024) FROM stdin;
RLS001	1	8.28	8.32	8.36	8.44	8.71	8.77	8.86	8.98	9.09	9.18	9.33	9.37	9.44	9.55	9.64
RLS002	2	8.51	8.61	8.72	8.79	8.93	9.03	9.12	9.25	9.34	9.45	9.54	9.58	9.71	9.82	9.93
RLS003	3	8.13	8.2	8.27	8.28	8.29	8.42	8.59	8.72	8.76	8.92	8.99	9.07	9.18	9.28	9.44
RLS004	4	8.25	8.29	8.34	8.38	8.47	8.49	8.59	8.76	8.92	9.03	9.14	9.19	9.22	9.32	9.43
RLS005	5	7.34	7.48	7.69	7.8	7.92	7.96	8.07	8.15	8.23	8.45	8.55	8.6	8.68	8.81	8.9
RLS006	6	7.34	7.42	7.5	7.53	7.66	7.77	7.83	7.99	8	8.18	8.24	8.3	8.37	8.5	8.57
RLS007	7	7.85	7.93	8.01	8.09	8.28	8.29	8.37	8.47	8.61	8.73	8.84	8.87	8.91	9.03	9.04
RLS008	8	7.26	7.28	7.3	7.32	7.48	7.56	7.63	7.79	7.82	7.92	8.05	8.08	8.18	8.29	8.36
RLS009	9	7.07	7.19	7.25	7.32	7.35	7.46	7.62	7.78	7.84	7.98	8.06	8.08	8.11	8.25	8.33
RLS010	10	9.38	9.46	9.58	9.63	9.64	9.65	9.67	9.79	9.81	9.99	10.12	10.18	10.37	10.41	10.5
RLS011	11	10.37	10.4	10.43	10.47	10.54	10.7	10.88	11.02	11.05	11.06	11.13	11.17	11.31	11.45	11.49
RLS012	12	7.4	7.46	7.52	7.58	7.71	7.86	7.95	8.14	8.15	8.37	8.55	8.61	8.78	8.83	8.87
RLS013	13	6.71	6.74	6.77	6.8	6.93	7.03	7.15	7.27	7.35	7.53	7.69	7.75	7.93	8.01	8.02
RLS014	14	8.51	8.53	8.63	8.72	8.84	9	9.12	9.19	9.32	9.38	9.55	9.64	9.75	9.83	9.92
RLS015	15	6.73	6.79	6.85	6.9	7.05	7.14	7.23	7.34	7.39	7.59	7.78	7.88	8.03	8.11	8.28
RLS016	16	7.92	7.95	8.06	8.17	8.19	8.27	8.37	8.53	8.62	8.74	8.89	8.93	9.13	9.15	9.23
RLS017	17	7.74	7.77	8.05	8.1	8.11	8.26	8.36	8.55	8.65	8.84	8.95	9.06	9.39	9.45	9.54
RLS018	18	5.73	6.07	6.33	6.54	6.67	6.71	6.79	6.9	7.03	7.27	7.31	7.38	7.61	7.74	7.87
RLS019	19	6.5	6.6	6.71	6.76	6.85	6.93	7.02	7.15	7.3	7.55	7.63	7.69	7.7	7.82	8.02
RLS020	20	6.27	6.32	6.62	6.69	6.83	6.93	6.98	7.05	7.12	7.31	7.37	7.45	7.59	7.71	7.78
RLS021	21	7.62	7.68	7.73	7.79	7.82	8.03	8.13	8.29	8.37	8.51	8.59	8.64	8.65	8.73	8.81
RLS022	22	7.25	7.37	7.48	7.59	7.6	7.76	7.89	7.99	8	8.2	8.29	8.34	8.46	8.55	8.62
RLS023	23	8.56	8.79	8.83	8.87	9.04	9.15	9.24	9.36	9.48	9.7	9.77	9.84	9.92	9.99	10.02
RLS024	24	8.66	8.68	8.71	8.79	8.86	8.88	8.96	9.14	9.24	9.43	9.49	9.62	9.68	9.77	9.84
RLS025	25	7.65	7.69	7.73	7.82	7.89	7.97	8.12	8.29	8.52	8.75	8.83	8.89	8.89	8.96	9.04
RLS026	26	7.29	7.33	7.37	7.45	7.49	7.64	7.75	7.95	8.02	8.26	8.38	8.46	8.63	8.76	8.86
RLS027	27	7.57	7.67	7.76	7.93	8.02	8.18	8.32	8.46	8.69	8.91	9.04	9.13	9.25	9.31	9.42
RLS028	28	6.85	6.89	6.92	6.96	6.97	7.05	7.12	7.28	7.46	7.69	7.82	7.9	8.02	8.1	8.29
RLS029	29	6.63	6.65	6.76	6.87	6.88	6.94	7.14	7.31	7.5	7.73	7.89	7.96	8.08	8.13	8.15
RLS030	30	8.64	8.72	8.8	8.81	9.15	9.16	9.27	9.38	9.58	9.81	9.93	10.03	10.19	10.2	10.26
RLS031	31	7.91	7.98	8.04	8.27	8.34	8.37	8.52	8.61	8.72	9	9.04	9.09	9.24	9.26	9.37
RLS032	32	6.77	6.82	6.87	6.91	6.96	7.01	7.06	7.15	7.27	7.44	7.6	7.69	7.84	7.93	7.86
RLS033	33	5.59	5.6	5.73	5.74	5.76	5.99	6.15	6.27	6.52	6.65	6.69	6.76	7.02	7.15	9.82
RLS034	34	7.46	7.52	7.59	7.61	7.73	7.84	7.95	8.1	8.17	8.34	8.48	8.54	8.69	8.77	8.85
\.


--
-- TOC entry 3378 (class 0 OID 17337)
-- Dependencies: 223
-- Data for Name: umpan_baliks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.umpan_baliks (id_umpan_balik, umpan_balik, created_at, nama, email) FROM stdin;
1	this semester ain't done but i am	2025-05-29 19:23:44.802172	bistiana	bistiana@gmail.com
2	peningnya	2025-05-29 19:31:59.331754	iah	iah@example.com
\.


--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 214
-- Name: provinsi_id_provinsi_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provinsi_id_provinsi_seq', 1, false);


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 222
-- Name: umpan_baliks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.umpan_baliks_id_seq', 2, true);


--
-- TOC entry 3208 (class 2606 OID 17261)
-- Name: ahh ahh_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahh
    ADD CONSTRAINT ahh_pkey PRIMARY KEY (id_ahh);


--
-- TOC entry 3210 (class 2606 OID 17273)
-- Name: ahs ahs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahs
    ADD CONSTRAINT ahs_pkey PRIMARY KEY (id_ahs);


--
-- TOC entry 3218 (class 2606 OID 17321)
-- Name: cluster cluster_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cluster
    ADD CONSTRAINT cluster_pkey PRIMARY KEY (id_cluster);


--
-- TOC entry 3214 (class 2606 OID 17297)
-- Name: ipm ipm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipm
    ADD CONSTRAINT ipm_pkey PRIMARY KEY (id_ipm);


--
-- TOC entry 3216 (class 2606 OID 17309)
-- Name: ppk ppk_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ppk
    ADD CONSTRAINT ppk_pkey PRIMARY KEY (id_ppk);


--
-- TOC entry 3206 (class 2606 OID 17254)
-- Name: provinsi provinsi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinsi
    ADD CONSTRAINT provinsi_pkey PRIMARY KEY (id_provinsi);


--
-- TOC entry 3212 (class 2606 OID 17285)
-- Name: rls rls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rls
    ADD CONSTRAINT rls_pkey PRIMARY KEY (id_rls);


--
-- TOC entry 3220 (class 2606 OID 17345)
-- Name: umpan_baliks umpan_baliks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.umpan_baliks
    ADD CONSTRAINT umpan_baliks_pkey PRIMARY KEY (id_umpan_balik);


--
-- TOC entry 3221 (class 2606 OID 17262)
-- Name: ahh ahh_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahh
    ADD CONSTRAINT ahh_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


--
-- TOC entry 3222 (class 2606 OID 17274)
-- Name: ahs ahs_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahs
    ADD CONSTRAINT ahs_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


--
-- TOC entry 3226 (class 2606 OID 17322)
-- Name: cluster cluster_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cluster
    ADD CONSTRAINT cluster_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


--
-- TOC entry 3224 (class 2606 OID 17298)
-- Name: ipm ipm_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipm
    ADD CONSTRAINT ipm_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


--
-- TOC entry 3225 (class 2606 OID 17310)
-- Name: ppk ppk_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ppk
    ADD CONSTRAINT ppk_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


--
-- TOC entry 3223 (class 2606 OID 17286)
-- Name: rls rls_id_provinsi_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rls
    ADD CONSTRAINT rls_id_provinsi_fkey FOREIGN KEY (id_provinsi) REFERENCES public.provinsi(id_provinsi);


-- Completed on 2025-05-30 20:12:49

--
-- PostgreSQL database dump complete
--

