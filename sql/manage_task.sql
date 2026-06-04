-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 04, 2026 at 10:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manage_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

CREATE TABLE `login_details` (
  `id` int(11) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `login_type` varchar(50) DEFAULT NULL,
  `status` varchar(5) DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`id`, `email`, `password`, `user_id`, `login_type`, `status`) VALUES
(1, 'thunivuvarisu1234@gmil.com', '$2b$10$JULYn3WNblPM0AJPXKPAOeh0N.Eygu03kaXUQP9VWO8ic7szwXcOq', 2, 'Register', 'Y'),
(2, 'thunivuvarisu1234@gmail.com', '$2b$10$0qePDrmUAlSnDRon9AFhY.w3GrpXnkCeTQtUyNrpuh5WActW8qhJe', 3, 'Register', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `register_details`
--

CREATE TABLE `register_details` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `profile` text DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(5) DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register_details`
--

INSERT INTO `register_details` (`id`, `fullname`, `email`, `phone`, `dob`, `profile`, `created_date`, `updated_date`, `status`) VALUES
(2, 'Admin', 'thunivuvarisu1234@gmil.com', 1234567890, '2000-01-01', '1778489496324download (3).jfif', '2026-05-11 08:51:36', '2026-05-11 08:51:36', 'Y'),
(3, 'Ezhilvannan', 'thunivuvarisu1234@gmail.com', 2147483647, '2002-09-07', '', '2026-05-24 18:03:07', '2026-05-24 18:03:07', 'Y');

-- --------------------------------------------------------

--
-- Table structure for table `task_details`
--

CREATE TABLE `task_details` (
  `id` int(11) NOT NULL,
  `task_titile` varchar(100) DEFAULT NULL,
  `task_start_date` date DEFAULT NULL,
  `task_day` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `active_status` varchar(1) DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task_details`
--

INSERT INTO `task_details` (`id`, `task_titile`, `task_start_date`, `task_day`, `user_id`, `created_date`, `updated_date`, `active_status`) VALUES
(1, 'running', '2026-05-28', 5, 2, '2026-05-28 17:39:30', '2026-05-28 17:39:30', 'Y'),
(4, 'go to gym', '2026-05-29', 30, 2, '2026-05-28 18:00:17', '2026-05-28 18:00:17', 'Y'),
(5, 'reading', '2026-05-30', 7, 2, '2026-05-30 17:53:48', '2026-05-30 17:53:48', 'Y'),
(6, 'movie', '2026-05-30', 5, 2, '2026-05-30 17:57:59', '2026-05-30 17:57:59', 'Y'),
(7, 'jokkk', '2026-05-30', 4, 2, '2026-05-30 17:59:16', '2026-05-30 17:59:16', 'Y'),
(8, 'jokkklllll', '2026-05-30', 4, 2, '2026-05-30 17:59:25', '2026-05-30 17:59:25', 'Y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `register_details`
--
ALTER TABLE `register_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task_details`
--
ALTER TABLE `task_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login_details`
--
ALTER TABLE `login_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `register_details`
--
ALTER TABLE `register_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `task_details`
--
ALTER TABLE `task_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `login_details`
--
ALTER TABLE `login_details`
  ADD CONSTRAINT `login_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `register_details` (`id`);

--
-- Constraints for table `task_details`
--
ALTER TABLE `task_details`
  ADD CONSTRAINT `task_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `login_details` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
