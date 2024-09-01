-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2024 at 10:21 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `id_actormovies`
--

CREATE TABLE `id_actormovies` (
  `id_actor` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_actor`
--

CREATE TABLE `tb_actor` (
  `id_actor` int(11) NOT NULL,
  `name_actor` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `Biography` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_genres`
--

CREATE TABLE `tb_genres` (
  `id_Genres` int(11) NOT NULL,
  `GenreName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_movie`
--

CREATE TABLE `tb_movie` (
  `id_movie` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `cherylloving_` int(11) NOT NULL,
  `Plo` text NOT NULL,
  `DirectorID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_moviegenres`
--

CREATE TABLE `tb_moviegenres` (
  `id_movie` int(11) NOT NULL,
  `id_Genres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_ratings`
--

CREATE TABLE `tb_ratings` (
  `id_Ratings` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Rating` int(11) NOT NULL,
  `review` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `DateJoined` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `id_actormovies`
--
ALTER TABLE `id_actormovies`
  ADD KEY `fk_actor_actormovie` (`id_actor`),
  ADD KEY `fk_movie_actormovie` (`id_movie`);

--
-- Indexes for table `tb_actor`
--
ALTER TABLE `tb_actor`
  ADD PRIMARY KEY (`id_actor`);

--
-- Indexes for table `tb_genres`
--
ALTER TABLE `tb_genres`
  ADD PRIMARY KEY (`id_Genres`);

--
-- Indexes for table `tb_movie`
--
ALTER TABLE `tb_movie`
  ADD PRIMARY KEY (`id_movie`);

--
-- Indexes for table `tb_moviegenres`
--
ALTER TABLE `tb_moviegenres`
  ADD KEY `fk_MovieGenres_movie` (`id_movie`),
  ADD KEY `fk_MovieGenres_Genres` (`id_Genres`);

--
-- Indexes for table `tb_ratings`
--
ALTER TABLE `tb_ratings`
  ADD PRIMARY KEY (`id_Ratings`),
  ADD KEY `fk_rating_movie` (`id_movie`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_actor`
--
ALTER TABLE `tb_actor`
  MODIFY `id_actor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_genres`
--
ALTER TABLE `tb_genres`
  MODIFY `id_Genres` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_movie`
--
ALTER TABLE `tb_movie`
  MODIFY `id_movie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_ratings`
--
ALTER TABLE `tb_ratings`
  MODIFY `id_Ratings` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `id_actormovies`
--
ALTER TABLE `id_actormovies`
  ADD CONSTRAINT `fk_actor_actormovie` FOREIGN KEY (`id_actor`) REFERENCES `tb_actor` (`id_actor`),
  ADD CONSTRAINT `fk_movie_actormovie` FOREIGN KEY (`id_movie`) REFERENCES `tb_movie` (`id_movie`);

--
-- Constraints for table `tb_moviegenres`
--
ALTER TABLE `tb_moviegenres`
  ADD CONSTRAINT `fk_MovieGenres_Genres` FOREIGN KEY (`id_Genres`) REFERENCES `tb_genres` (`id_Genres`),
  ADD CONSTRAINT `fk_MovieGenres_movie` FOREIGN KEY (`id_movie`) REFERENCES `tb_movie` (`id_movie`);

--
-- Constraints for table `tb_ratings`
--
ALTER TABLE `tb_ratings`
  ADD CONSTRAINT `fk_rating_movie` FOREIGN KEY (`id_movie`) REFERENCES `tb_movie` (`id_movie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
