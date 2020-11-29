1. Create a mysql database explore and a table hashtag:

  ```
  CREATE DATABASE explore;
  USE DATABASE explore;

  CREATE TABLE `hashtag` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createDate` datetime NOT NULL DEFAULT current_timestamp(),
  `createBy` int(11) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

  INSERT INTO `hashtag` (`id`, `name`, `createDate`, `createBy`) VALUES
  (1, 'food', '2020-11-28 22:16:07', 0);

  ALTER TABLE `hashtag`
  ADD PRIMARY KEY (`id`);

  ALTER TABLE `hashtag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
  ```
3. Clone this repository
4. Run `yarn` to install the dependencies
5. Once the dependencies are installed, run `yarn dev` to start the dev server on `localhost:3000`
