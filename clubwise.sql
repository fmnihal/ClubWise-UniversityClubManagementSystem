-- Database: clubwise

-- DROP DATABASE IF EXISTS clubwise;

CREATE DATABASE clubwise
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- Users table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    verification_code VARCHAR(20),
    profile_picture VARCHAR(100)
);

-- Clubs table
CREATE TABLE Clubs (
    club_id SERIAL PRIMARY KEY,
    club_name VARCHAR(100) NOT NULL,
    description TEXT,
    logo VARCHAR(100)
);

-- Events table
CREATE TABLE Events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    club_id INT REFERENCES Clubs(club_id) ON DELETE CASCADE,
    date DATE,
    time TIME,
    location VARCHAR(100),
    description TEXT
);

-- Event_Participation table
CREATE TABLE Event_Participation (
    participation_id SERIAL PRIMARY KEY,
    event_id INT REFERENCES Events(event_id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    participation_status VARCHAR(20),
    feedback TEXT,
    star_rating INT
);

-- Memberships table
CREATE TABLE Memberships (
    membership_id SERIAL PRIMARY KEY,
    club_id INT REFERENCES Clubs(club_id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    membership_status VARCHAR(20)
);

-- Event_Proposals table
CREATE TABLE Event_Proposals (
    proposal_id SERIAL PRIMARY KEY,
    club_id INT REFERENCES Clubs(club_id) ON DELETE CASCADE,
    event_name VARCHAR(100),
    proposal_status VARCHAR(20)
);

-- Magazine_Contents table
CREATE TABLE Magazine_Contents (
    content_id SERIAL PRIMARY KEY,
    club_id INT REFERENCES Clubs(club_id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    content_title VARCHAR(200),
    content_body TEXT,
    submission_date DATE,
    approval_status VARCHAR(20)
);

-- Admin_Panel table
CREATE TABLE Admin_Panel (
    admin_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    permissions VARCHAR(100)
);


-- Define foreign key constraint for Events table referencing Clubs table
ALTER TABLE Events
ADD CONSTRAINT fk_event_club
FOREIGN KEY (club_id)
REFERENCES Clubs(club_id)
ON DELETE CASCADE;

-- Define foreign key constraint for Event_Participation table referencing Events and Users tables
ALTER TABLE Event_Participation
ADD CONSTRAINT fk_participation_event
FOREIGN KEY (event_id)
REFERENCES Events(event_id)
ON DELETE CASCADE;

ALTER TABLE Event_Participation
ADD CONSTRAINT fk_participation_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE;

-- Define foreign key constraint for Memberships table referencing Clubs and Users tables
ALTER TABLE Memberships
ADD CONSTRAINT fk_membership_club
FOREIGN KEY (club_id)
REFERENCES Clubs(club_id)
ON DELETE CASCADE;

ALTER TABLE Memberships
ADD CONSTRAINT fk_membership_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE;

-- Define foreign key constraint for Magazine_Contents table referencing Clubs and Users tables
ALTER TABLE Magazine_Contents
ADD CONSTRAINT fk_content_club
FOREIGN KEY (club_id)
REFERENCES Clubs(club_id)
ON DELETE CASCADE;

ALTER TABLE Magazine_Contents
ADD CONSTRAINT fk_content_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE;

-- Define foreign key constraint for Admin_Panel table referencing Users table
ALTER TABLE Admin_Panel
ADD CONSTRAINT fk_admin_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE;
