-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 11:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing1`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `options` tinyint(4) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `is_correct` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`answer_id`, `question_id`, `options`, `description`, `is_correct`) VALUES
(1, 1, 1, 'Question 1 - Choice 1', 0),
(2, 1, 2, 'Question 1 - Choice 2', 0),
(3, 1, 3, 'Question 1 - Choice 3', 1),
(4, 1, 4, 'Question 1 - Choice 4', 0),
(5, 2, 1, 'Question 2 - Choice 1', 1),
(6, 2, 2, 'Question 2 - Choice 2', 0),
(7, 2, 3, 'Question 2 - Choice 3', 0),
(8, 2, 4, 'Question 2 - Choice 4', 0),
(9, 3, 1, 'Question 3 - Choice 1', 0),
(10, 3, 2, 'Question 3 - Choice 2', 1),
(11, 3, 3, 'Question 3 - Choice 3', 0),
(12, 3, 4, 'Question 3 - Choice 4', 0),
(13, 4, 1, 'Question 4 - Choice 1', 0),
(14, 4, 2, 'Question 4 - Choice 1', 1),
(15, 4, 3, 'Question 4 - Choice 3', 0),
(16, 4, 4, 'Question 4 - Choice 4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `exam_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `time_test` datetime NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`exam_id`, `name`, `time_test`, `description`) VALUES
(1, 'testinh', '2024-04-05 15:23:28', 'tttttttttttttttttttttttttttttt'),
(2, 'tessssssss', '2024-04-05 15:23:28', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
(3, 'abcdef', '2024-04-12 10:53:52', 'asvdsvasvsab'),
(4, 'asdvsadbsda', '2024-04-12 10:53:52', 'sadbsadsdab');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `question_id` int(11) NOT NULL,
  `exam_id` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `exam_id`, `description`) VALUES
(1, 1, 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'),
(2, 1, 'question 2'),
(3, 1, 'question 3'),
(4, 1, 'question 4');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'sinh_vien'),
(2, 'giao_vien');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` tinyint(4) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `role_id`, `name`, `gender`, `email`, `password`, `username`) VALUES
(1, 1, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', 1, 'fuck@gmail.com ', '$2a$12$Az33JBTvRXVoF6/MohyCcuOhZgCx4OF1ApmOnzmT1/NKnuqI72wE.', 'James'),
(2, 1, 'Tran Van A', 1, 'asdasd@gmail.com', '$2a$12$nFkyVKZeDgVlY/wJHkmJROaEQfG64LXQ7IfHUYyl6ug6rJUpDJ5SW', 'Hung'),
(3, 1, 'Tran Van A', 1, 'jkfsiudfh@gmail.com', '$2a$12$cWQzpZ/TLi.mII6MqeFfPeTl4L8CiL24F9UxdkSffjfhOpIPoJk2e', 'Lan'),
(4, 2, 'Hoang Thi C', 2, 'asfsdfhou@gmail.com', '$2a$12$ycAvW97q3yr9U7S3alY6FeecjZbti7KySJhWj5dhYN50IgyIX2UZW', 'Quoc Anh'),
(5, 2, 'admin', 1, 'admin@admin.com', '$2a$10$gqHrslMttQWSsDSVRTK1OehkkBiXsJ/a4z2OURU./dizwOQu5Lovu', 'admin'),
(6, 2, 'user', 1, 'user@user.com', '$2a$10$QGnXmQezCIGYjCmEGUIcveeFOCJJ2YJ293soKKPUfvLVrGGAuK.fK', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_answer`
--

CREATE TABLE `user_answer` (
  `question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `option_choose` tinyint(4) NOT NULL,
  `is_correct` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_exam`
--

CREATE TABLE `user_exam` (
  `exam_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`answer_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`exam_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `exam_id` (`exam_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `user_answer`
--
ALTER TABLE `user_answer`
  ADD PRIMARY KEY (`question_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user_exam`
--
ALTER TABLE `user_exam`
  ADD PRIMARY KEY (`exam_id`,`user_id`),
  ADD KEY `user_id` (`user_id`,`exam_id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `exam_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

--
-- Constraints for table `user_answer`
--
ALTER TABLE `user_answer`
  ADD CONSTRAINT `user_answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`),
  ADD CONSTRAINT `user_answer_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `user_exam`
--
ALTER TABLE `user_exam`
  ADD CONSTRAINT `user_exam_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `user_exam_ibfk_2` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`),
  ADD CONSTRAINT `user_exam_ibfk_3` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`),
  ADD CONSTRAINT `user_exam_ibfk_4` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`),
  ADD CONSTRAINT `user_exam_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
