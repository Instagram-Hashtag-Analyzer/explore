1. Create a mysql database `explore` and a table `hashtag`:

```
CREATE DATABASE `explore`;
USE `explore`;

CREATE TABLE `hashtag` (
`name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
`numPost` int(12) NOT NULL,
`top9PostId` varchar(50) COLLATE utf8_unicode_ci,
`createDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `hashtag` ( `name`, `numPost` ,`createDate`) VALUES
('food', 1, '2020-11-28 22:16:07');

ALTER TABLE `hashtag`
ADD PRIMARY KEY (`name`);
```

3. Clone this repository
4. Run `yarn` to install the dependencies
5. Once the dependencies are installed, run `yarn dev` to start the dev server on `localhost:3000`
