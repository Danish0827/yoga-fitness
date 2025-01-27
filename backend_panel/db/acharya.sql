PGDMP  
                    |            acharya-shiv     15.7 (Ubuntu 15.7-1.pgdg23.10+1)     16.3 (Ubuntu 16.3-1.pgdg23.10+1) R    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    36146    acharya-shiv    DATABASE     t   CREATE DATABASE "acharya-shiv" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_IN';
    DROP DATABASE "acharya-shiv";
                postgres    false            �            1255    36445    update_student_updated_at()    FUNCTION     �   CREATE FUNCTION public.update_student_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.student_updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
 2   DROP FUNCTION public.update_student_updated_at();
       public          postgres    false            �            1259    36266 
   activities    TABLE     �  CREATE TABLE public.activities (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    short_description character varying(255),
    description text,
    type character varying(50) NOT NULL,
    thumbnail_url character varying(255),
    media_url character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.activities;
       public         heap    postgres    false            �            1259    36265    activities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.activities_id_seq;
       public          postgres    false    222            �           0    0    activities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;
          public          postgres    false    221            �            1259    36152    attributes_attribute_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attributes_attribute_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.attributes_attribute_id_seq;
       public          postgres    false            �            1259    36318    blogs    TABLE     -  CREATE TABLE public.blogs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    short_description character varying(255),
    description text,
    type character varying(50) NOT NULL,
    thumbnail_url character varying(255),
    media_url character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    keywords text,
    visibility character varying(20) DEFAULT 'private'::character varying
);
    DROP TABLE public.blogs;
       public         heap    postgres    false            �            1259    36294    blogs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.blogs_id_seq;
       public          postgres    false            �            1259    36317    blogs_id_seq1    SEQUENCE     �   CREATE SEQUENCE public.blogs_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.blogs_id_seq1;
       public          postgres    false    225            �           0    0    blogs_id_seq1    SEQUENCE OWNED BY     >   ALTER SEQUENCE public.blogs_id_seq1 OWNED BY public.blogs.id;
          public          postgres    false    224            �            1259    36162    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false            �            1259    36492    chapters    TABLE     S  CREATE TABLE public.chapters (
    chapter_id integer NOT NULL,
    course_id integer,
    title character varying(255) NOT NULL,
    chapter_number integer NOT NULL,
    slug character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    description text,
    video_link character varying(255)
);
    DROP TABLE public.chapters;
       public         heap    postgres    false            �            1259    36491    chapters_chapter_id_seq    SEQUENCE     �   CREATE SEQUENCE public.chapters_chapter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.chapters_chapter_id_seq;
       public          postgres    false    231            �           0    0    chapters_chapter_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.chapters_chapter_id_seq OWNED BY public.chapters.chapter_id;
          public          postgres    false    230            �            1259    36255    consultation    TABLE     �  CREATE TABLE public.consultation (
    id integer NOT NULL,
    full_name character varying(100) NOT NULL,
    age integer NOT NULL,
    contact_number character varying(15) NOT NULL,
    alternate_mobile_number character varying(15),
    diet_preference character varying(10),
    zodiac_sign character varying(20),
    relationship_status character varying(50),
    medicine_consumption text,
    disorders_or_disease text,
    purpose_of_yoga text,
    personal_notes text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    preferred_date date,
    preferred_time time with time zone,
    appointment_till_date date,
    appointment_till_time time with time zone,
    email_address text,
    additionaltext text,
    appointmentstatus text,
    appointmentendedbyadmintime timestamp with time zone,
    country text,
    user_state text,
    city text,
    payment_mode text,
    payment_status text,
    payment_amount text,
    payment_id text,
    payment_obj jsonb
);
     DROP TABLE public.consultation;
       public         heap    postgres    false            �            1259    36254    consultation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.consultation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.consultation_id_seq;
       public          postgres    false    220            �           0    0    consultation_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.consultation_id_seq OWNED BY public.consultation.id;
          public          postgres    false    219            �            1259    36479    courses    TABLE       CREATE TABLE public.courses (
    course_id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    instructor character varying(100),
    slug character varying(255) NOT NULL,
    old_price numeric(10,2),
    price numeric(10,2) NOT NULL,
    is_free boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    course_thumbnail character varying(255),
    duration character varying(50),
    level character varying(50),
    visibility boolean DEFAULT false NOT NULL
);
    DROP TABLE public.courses;
       public         heap    postgres    false            �            1259    36478    courses_course_id_seq    SEQUENCE     �   CREATE SEQUENCE public.courses_course_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.courses_course_id_seq;
       public          postgres    false    229            �           0    0    courses_course_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.courses_course_id_seq OWNED BY public.courses.course_id;
          public          postgres    false    228            �            1259    36511    enrollments    TABLE     �   CREATE TABLE public.enrollments (
    enrollment_id integer NOT NULL,
    user_id integer,
    course_id integer,
    enrolled_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    paymentobj jsonb
);
    DROP TABLE public.enrollments;
       public         heap    postgres    false            �            1259    36510    enrollments_enrollment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.enrollments_enrollment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.enrollments_enrollment_id_seq;
       public          postgres    false    233            �           0    0    enrollments_enrollment_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.enrollments_enrollment_id_seq OWNED BY public.enrollments.enrollment_id;
          public          postgres    false    232            �            1259    36432    students    TABLE     s  CREATE TABLE public.students (
    student_id integer NOT NULL,
    student_name character varying(255) NOT NULL,
    student_email character varying(255) NOT NULL,
    student_password character varying(255) NOT NULL,
    student_created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    student_updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.students;
       public         heap    postgres    false            �            1259    36431    students_student_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.students_student_id_seq;
       public          postgres    false    227            �           0    0    students_student_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.students_student_id_seq OWNED BY public.students.student_id;
          public          postgres    false    226            �            1259    36193     subcategories_subcategory_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subcategories_subcategory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.subcategories_subcategory_id_seq;
       public          postgres    false            �            1259    36195 
   superadmin    TABLE     �  CREATE TABLE public.superadmin (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone_number character varying(20),
    password character varying(255) NOT NULL,
    profile_image text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.superadmin;
       public         heap    postgres    false            �            1259    36202    superadmin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.superadmin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.superadmin_id_seq;
       public          postgres    false    217            �           0    0    superadmin_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.superadmin_id_seq OWNED BY public.superadmin.id;
          public          postgres    false    218                       2604    36269    activities id    DEFAULT     n   ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);
 <   ALTER TABLE public.activities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222                       2604    36321    blogs id    DEFAULT     e   ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq1'::regclass);
 7   ALTER TABLE public.blogs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            &           2604    36495    chapters chapter_id    DEFAULT     z   ALTER TABLE ONLY public.chapters ALTER COLUMN chapter_id SET DEFAULT nextval('public.chapters_chapter_id_seq'::regclass);
 B   ALTER TABLE public.chapters ALTER COLUMN chapter_id DROP DEFAULT;
       public          postgres    false    231    230    231                       2604    36258    consultation id    DEFAULT     r   ALTER TABLE ONLY public.consultation ALTER COLUMN id SET DEFAULT nextval('public.consultation_id_seq'::regclass);
 >   ALTER TABLE public.consultation ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            "           2604    36482    courses course_id    DEFAULT     v   ALTER TABLE ONLY public.courses ALTER COLUMN course_id SET DEFAULT nextval('public.courses_course_id_seq'::regclass);
 @   ALTER TABLE public.courses ALTER COLUMN course_id DROP DEFAULT;
       public          postgres    false    229    228    229            (           2604    36514    enrollments enrollment_id    DEFAULT     �   ALTER TABLE ONLY public.enrollments ALTER COLUMN enrollment_id SET DEFAULT nextval('public.enrollments_enrollment_id_seq'::regclass);
 H   ALTER TABLE public.enrollments ALTER COLUMN enrollment_id DROP DEFAULT;
       public          postgres    false    232    233    233                       2604    36435    students student_id    DEFAULT     z   ALTER TABLE ONLY public.students ALTER COLUMN student_id SET DEFAULT nextval('public.students_student_id_seq'::regclass);
 B   ALTER TABLE public.students ALTER COLUMN student_id DROP DEFAULT;
       public          postgres    false    226    227    227                       2604    36395    superadmin id    DEFAULT     n   ALTER TABLE ONLY public.superadmin ALTER COLUMN id SET DEFAULT nextval('public.superadmin_id_seq'::regclass);
 <   ALTER TABLE public.superadmin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �          0    36266 
   activities 
   TABLE DATA           �   COPY public.activities (id, title, slug, short_description, description, type, thumbnail_url, media_url, created_at, updated_at) FROM stdin;
    public          postgres    false    222   Lk       �          0    36318    blogs 
   TABLE DATA           �   COPY public.blogs (id, title, slug, short_description, description, type, thumbnail_url, media_url, created_at, updated_at, keywords, visibility) FROM stdin;
    public          postgres    false    225   Ho       �          0    36492    chapters 
   TABLE DATA           {   COPY public.chapters (chapter_id, course_id, title, chapter_number, slug, created_at, description, video_link) FROM stdin;
    public          postgres    false    231   7u       �          0    36255    consultation 
   TABLE DATA           �  COPY public.consultation (id, full_name, age, contact_number, alternate_mobile_number, diet_preference, zodiac_sign, relationship_status, medicine_consumption, disorders_or_disease, purpose_of_yoga, personal_notes, created_at, preferred_date, preferred_time, appointment_till_date, appointment_till_time, email_address, additionaltext, appointmentstatus, appointmentendedbyadmintime, country, user_state, city, payment_mode, payment_status, payment_amount, payment_id, payment_obj) FROM stdin;
    public          postgres    false    220   Tu       �          0    36479    courses 
   TABLE DATA           �   COPY public.courses (course_id, title, description, instructor, slug, old_price, price, is_free, created_at, course_thumbnail, duration, level, visibility) FROM stdin;
    public          postgres    false    229   �}       �          0    36511    enrollments 
   TABLE DATA           a   COPY public.enrollments (enrollment_id, user_id, course_id, enrolled_at, paymentobj) FROM stdin;
    public          postgres    false    233   �~       �          0    36432    students 
   TABLE DATA           �   COPY public.students (student_id, student_name, student_email, student_password, student_created_at, student_updated_at) FROM stdin;
    public          postgres    false    227   �~       �          0    36195 
   superadmin 
   TABLE DATA           �   COPY public.superadmin (id, first_name, last_name, email, phone_number, password, profile_image, created_at, updated_at) FROM stdin;
    public          postgres    false    217   �       �           0    0    activities_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.activities_id_seq', 20, true);
          public          postgres    false    221                        0    0    attributes_attribute_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.attributes_attribute_id_seq', 1, false);
          public          postgres    false    214                       0    0    blogs_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.blogs_id_seq', 1, false);
          public          postgres    false    223                       0    0    blogs_id_seq1    SEQUENCE SET     <   SELECT pg_catalog.setval('public.blogs_id_seq1', 40, true);
          public          postgres    false    224                       0    0    categories_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categories_category_id_seq', 1, false);
          public          postgres    false    215                       0    0    chapters_chapter_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.chapters_chapter_id_seq', 1, false);
          public          postgres    false    230                       0    0    consultation_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.consultation_id_seq', 42, true);
          public          postgres    false    219                       0    0    courses_course_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.courses_course_id_seq', 1, true);
          public          postgres    false    228                       0    0    enrollments_enrollment_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.enrollments_enrollment_id_seq', 1, false);
          public          postgres    false    232                       0    0    students_student_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.students_student_id_seq', 2, true);
          public          postgres    false    226            	           0    0     subcategories_subcategory_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.subcategories_subcategory_id_seq', 1, false);
          public          postgres    false    216            
           0    0    superadmin_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.superadmin_id_seq', 1, true);
          public          postgres    false    218            1           2606    36276    activities activities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_pkey;
       public            postgres    false    222            3           2606    36278    activities activities_slug_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_slug_key UNIQUE (slug);
 H   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_slug_key;
       public            postgres    false    222            5           2606    36327    blogs blogs_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.blogs DROP CONSTRAINT blogs_pkey;
       public            postgres    false    225            7           2606    36329    blogs blogs_slug_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_slug_key UNIQUE (slug);
 >   ALTER TABLE ONLY public.blogs DROP CONSTRAINT blogs_slug_key;
       public            postgres    false    225            B           2606    36504 .   chapters chapters_course_id_chapter_number_key 
   CONSTRAINT     ~   ALTER TABLE ONLY public.chapters
    ADD CONSTRAINT chapters_course_id_chapter_number_key UNIQUE (course_id, chapter_number);
 X   ALTER TABLE ONLY public.chapters DROP CONSTRAINT chapters_course_id_chapter_number_key;
       public            postgres    false    231    231            D           2606    36500    chapters chapters_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.chapters
    ADD CONSTRAINT chapters_pkey PRIMARY KEY (chapter_id);
 @   ALTER TABLE ONLY public.chapters DROP CONSTRAINT chapters_pkey;
       public            postgres    false    231            F           2606    36502    chapters chapters_slug_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.chapters
    ADD CONSTRAINT chapters_slug_key UNIQUE (slug);
 D   ALTER TABLE ONLY public.chapters DROP CONSTRAINT chapters_slug_key;
       public            postgres    false    231            /           2606    36264    consultation consultation_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.consultation
    ADD CONSTRAINT consultation_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.consultation DROP CONSTRAINT consultation_pkey;
       public            postgres    false    220            >           2606    36488    courses courses_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public            postgres    false    229            @           2606    36490    courses courses_slug_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_slug_key UNIQUE (slug);
 B   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_slug_key;
       public            postgres    false    229            H           2606    36519    enrollments enrollments_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_pkey PRIMARY KEY (enrollment_id);
 F   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollments_pkey;
       public            postgres    false    233            J           2606    36521 -   enrollments enrollments_user_id_course_id_key 
   CONSTRAINT     v   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_user_id_course_id_key UNIQUE (user_id, course_id);
 W   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollments_user_id_course_id_key;
       public            postgres    false    233    233            :           2606    36441    students students_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    227            <           2606    36443 #   students students_student_email_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_email_key UNIQUE (student_email);
 M   ALTER TABLE ONLY public.students DROP CONSTRAINT students_student_email_key;
       public            postgres    false    227            +           2606    36236    superadmin superadmin_email_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.superadmin
    ADD CONSTRAINT superadmin_email_key UNIQUE (email);
 I   ALTER TABLE ONLY public.superadmin DROP CONSTRAINT superadmin_email_key;
       public            postgres    false    217            -           2606    36238    superadmin superadmin_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.superadmin
    ADD CONSTRAINT superadmin_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.superadmin DROP CONSTRAINT superadmin_pkey;
       public            postgres    false    217            8           1259    36444    idx_students_email    INDEX     P   CREATE INDEX idx_students_email ON public.students USING btree (student_email);
 &   DROP INDEX public.idx_students_email;
       public            postgres    false    227            N           2620    36446    students set_student_updated_at    TRIGGER     �   CREATE TRIGGER set_student_updated_at BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION public.update_student_updated_at();
 8   DROP TRIGGER set_student_updated_at ON public.students;
       public          postgres    false    234    227            K           2606    36505     chapters chapters_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chapters
    ADD CONSTRAINT chapters_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.chapters DROP CONSTRAINT chapters_course_id_fkey;
       public          postgres    false    229    231    3390            L           2606    36527 &   enrollments enrollments_course_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(course_id) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollments_course_id_fkey;
       public          postgres    false    233    3390    229            M           2606    36522 $   enrollments enrollments_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.enrollments
    ADD CONSTRAINT enrollments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.students(student_id) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.enrollments DROP CONSTRAINT enrollments_user_id_fkey;
       public          postgres    false    227    233    3386            �   �  x�}U�n�6='_��^�c[Iz�]4���P4]�@@K#�	EjIʊ������K�f$'i���q4>�y�f����W�M�T��SRQw��3��3�3ĳ%�~kI����냭�����;��?Z�U��d:�P#)m�ҁT��9��R�1��XT�"�܁�J��G��뽝$O1	 ��4��z���T�>��7��������ZiW����u�����j���51�JY��	@|�� ��?*�p�IJG��v�>9T��N���"��w�,i%�w8�(F��Z�����&EMCU�'�GAN�0����W#Wz�LV�t�รL�Q��q7��G����^y'���@rF9QM���0���4�L�R�G=�@y�9�&�d�;�8I?RT�i��?�u�sP�4�P�-���V�%'��if�[5�w*��2�vO��t�W.��d�3rp���Ty������-�=���S+��<�2�Vk�#��H�7=+'E@��8�[�a.AQ�E�=y����J;E:�|D#����������ڞ�Ѫ&���'t.�fo�#��;bؖ	4����M�T�H^��$bkS��\��fH$�~��^�3�����e0G�aNLm��m�����q�� ��г�E[1g@7k��L���6�]d� 0φ@=�������<	i��j�Z]Z}�1ݢ�2*���φ=��Na��6> P���پb�9���W�3>�\g���L5ء��{���h�{��i�i��,�QOL�wz�j��m�Z$��G�GK�iw$��4{�&�M�����D/��E�n^�{���+�g^���k>�3�&�=p���)E��^l���S��U~]n���2�.w����m�-�eyU�)�_����z��v��p�ߵ��o?>�8�V����_���z���u6A�Lg)�M�"eE��<m�R���廬(T����n��
�w��|{s��$lUQ����ݪ�Zޞ��:??���8      �   �  x��V�n7}���H��E%E��\l׀{I�"����0���h��ܒ\)�S��O��|I�wm#�H,K���̙s���]_�|�޿�K����ku�\��x�����z�婞n�n�WSkV���p�>��;�F*e�r>)��Ni	_WJG�t���O�$�I����q��D��UJ�/���ԅ�i՘�A�XrɬL����dJR[�UuHUQ�	oWcs���J^���w����Q�Q+�ϛ�n����*}��H�l��ڨv�W�F'NC:MƔ�}ې~��c��x�$�>l�ҹ�NA�{F�@�)	�xt��[�r{(�t�(,S��'i�F��@@Bڦf�*Cy��%^L;K'И�.U�U�>���tM��n.�>��p87V�.��N��$O�FP�q4;�����=(���X���z1?���㛓g_�"v'��8��w��6���[q�g R��u���O�ȣZk��V��q�[R>�hZcuPe� r5řz��!i|����@���[]��;w�Ox��	
��P]h�7R���P1�m����⭉���L2UP-PEB��HbW�d��_:�o5p.�HyQ��J�݉<�]�eG1�!j�Y�Y� �"E��	�u�]��	\�I�ń�[x�UFĴ-Ěv� g�����hL2t�ӳ���Z.4gX�X�VՇ<7�
2Rk�/$Ϲ� ���B��-U�vb��6�'����s�j=� �&4��� �8SW"�{4,m��oQw`�E��d�~vWC&�[9�I<�J�R��i�lg^���<��JF�C���5nj�-���-䣳�s~K:�hdG����,1 ґ%�e�o�V��$|�/�0�c3Z�m��~�qÖ��ױ
���tB�"I��-�D���M�I}0�j�D"�{� a��,�A3�go6N �;�W������c��\�cu�B"� nּ�\/p|$�kO�B��z�G�t�a�~!�_��Ү� N�`6z#Ʋu�ha���)#�|l @�|c���j���2��9s{0L6+Wھ�Ai�����!���}�I���'�R����h�8�F��u��f���k<��Y;��T��N/��148=?��E��|?�6%�O����X1�lɜ,"��3���v�K`nV-�����+�~��xj���;�UT�XC������1h��%
N"�\?f�x4�U�9SrO�����p��Bv�`�I�cg���V!��A>�j�p0"��<F��dS�%�z�)j�٥�J�=�����2��y���@?"��h�3�9����5��tD�x��9�r�^!�s�#�L�Eltf�0�0�U�Y��ga��}ͬK�|ͻn��1j�.`�ȟk,S�mN�������=�n�����œ����'��ˣ�ŔL�����uG��ͫ����r:<],�by�<:>8�=}�\<~�����p�q��rvt�xx���s����8y��Tgi��k�������?�(I�      �      x������ � �      �   �  x�ř[S�Jǟ�O����q���5�����JU��"[��D6���-[$@���k4j�~����H`�HŃ�G�Y���n~IBy.a��?����U=jzTw#�ҿ�����)�#��i+=?��+�&]?�J�%���+,qb(��NC��:0�#A��m�d�;p�U+�Y]����,����d!��$�����?�''��p����6/�����8]|����gs��{u�,1�5`�����bOz/��!�l4��M�1\�B*����**Vi��䎂6ʀ��猃�6hb��[���&�*�L��
b��H�l��=��'׃�`x����n	�2�-��<��-�D�;�(ij��)���@-7��N�H��Y=�Ŕ����Gc9�`�b�����������q	p������6K�a�_��V.�_���@�]�,��N%6k�z��a�6�a9��dz6�il${z{z<?��6;_�]���#,��tw����ч�`"v� }X��ݧ�j`m�qq�߱0\[B9��
� 4�TCR��3��YE���x�#�i���T{-8#!�\��d8Ft����*�2�Ti����,�`uO�w��"LJ����&�^�T�^�����O���C!��I?̦Y#߳���n�����{���w�W}2�|ۊo�@+��XX���(�rV��IH9hj=Dŕ�� ���c��
"���R�(���/yʗ!T�m����:_Y�-Ww���Md�D�z^����ρ��C��]#y9�w}Z��\�~�����sq��h�~��K[1�h������[�i�R�s����T�����')��Tzm�Dj�%��d)�& �m�����Zڔ���2���M�T4Ѧ�%��|�Q�!L����=�o��2k'��-�Y��3L/g�?]�$�uԥFaBF���� $�&X���k�C�����r#���1�A?��zq��3'l���ŧڄ�%>	ILF���$Eo�Zmx�B�o�����h}
�`�(O��Ư�!�q��P�]�
��?�����⪁v���º��L�8f[�c^FdrQS�l
H��"�orJ,&p2j��2P�M!.B3��3y�vk��w]I{\w�!fS�e��B|�G�]:��6vj���"�w5���<�:��>Y9�
���������]�]خh��-�� O��4e����d�I���J�#&H�1�|L#f� ʱ@p�Jö-���Y&ۜ2^mևm��K�feU n�h��F�̐Wn\8�kͫ��������H��V������I~��i��b��f븁�@}D܂{ �bq�S��E�����n���I��K�������̛&�q�xtxZj5ʃ4�f}f�U���$��ꆒ�l�T���a�_��t����x��V�O�O�V���0j��b��f�ȭUAs���G�6\Y,��H1�QX�c.E��}�RO�
g&�$G#�.c<S��k���6k`+|م�s˙�K��[��g`�#����?����˷Zn�TF����0�����»��2�,QZK] ���u*\d���FN�N.��(�=�U����'%A�YNa����U�f=G�c��0/�I��V�Y�e���k5�8�|��[r��h���q7ywwyzv�G�3R��#)���Q���Pf����s���C`��X>)lj̶Գ��J��Z+�����\����f���X�^v���̺�b��d�r�sO���2��f�����u���1�33�3���Զ�c<��G���-��t��*����zc�69wx�3��Pl�&�f���6�GqyV�%y�h��<N�B4g��>�}2���9>�O'c6/:�ye���N��bw�f�71ISx^���k^� ���m�Cժ��}5�b�v��26��a/`���k�C��p~�bf�m�m��8��5�?#�e1V�bnrY�j�~y/�(��6tU7�c��x\�X�h�\��xܟ���9w��NX�-&�B�جE*�]xC��W_#�z��tk<���p=M����U�S��6k&�z����
,�X���o-F���i�T����)�����5�T=��0�����V���'����|���&�}b�M������7x��h�F��3���sAm!r (�RK���P��AY&#մ�j�t߼y�_�}�      �   �   x�MO�n�0��Wl��r2]�k"]��i|f1�`�����9i����a�7qNc�'�$��H��e�9��^�x0���1R���q����nۖ��Y��e	�k�Yė��S���KK�Eo��b���V����Fګ�ƾ����̼�A�}��}ѻu�)E��1����E�F���>�j.(7
�?�D|a�D�7�i�'XZ�      �      x������ � �      �   �   x�]ʻ�0 й�
6Ci/�W褉�IHL$.# ET�Q����3`ym��䵵��v �%��l�D�w��+�_!UϰL�x��F�tqp���_�#��:������~�I��[0�(婹Am 1P�8��D�?�Q $)���Qpοp�*�      �   �   x���;�0  й����2�1&��DC\�E(T�no<���#��U�A�U�! s>���[x� �q������'��lx��~��܃ƭ�eߤ��(�{�х�NhVn�0�2��|�\G���C�P�Qƶ��FV9�\��/�@�QUo�S>�lF�𘇱�0
�������;A��=v     