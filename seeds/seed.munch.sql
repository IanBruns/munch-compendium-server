BEGIN;

TRUNCATE
posts,
brands
RESTART IDENTITY CASCADE;

INSERT INTO brands (brand_name)
VALUES
('4 Rivers Smokehouse'),
('7-Eleven'),
('A&W'),
('Applebee''s'),
('Arby''s'),
('Bang Energy'),
('Baskin Robbins'),
('Bojangles'),
('Booster Juice'),
('Boston Market'),
('Boston''s Pizza'),
('Burger King'),
('BurgerFi'),
('Carl''s Jr'),
('Checker''s and Rally''s'),
('Cheez-It'),
('Chick-fil-A'),
('Chicken Guy'),
('Chipotle'),
('Chuck E. Cheese'),
('Cinnabon'),
('Cold Stone Creamery'),
('Coolgreens'),
('CoreLife Eatery'),
('Dairy Queen'),
('Denny''s'),
('Domino''s'),
('Doritos'),
('Duck Donuts'),
('Dunkin'''),
('Earl of Sandwich'),
('Edible Arrangements'),
('Einstein Bros Bagles'),
('Fancy Feast'),
('Fatburger'),
('Fazoli''s'),
('Fresh & Co'),
('GarfieldEATS'),
('Hardee''s'),
('Heinz'),
('Jack in the Box'),
('Jelly Belly'),
('Jersey Mike''s'),
('Jester''s'),
('KFC'),
('Kraft'),
('Krispy Kreme'),
('Krystal'),
('Marks & Spencer'),
('McDonald''s'),
('Michael Jordan''s Steakhouse'),
('Mickey''s Deli'),
('MTN DEW'),
('Next Level Burger'),
('Olive Garden'),
('Oreo'),
('Panera Bread'),
('Papa John''s'),
('PDQ'),
('Pepsi'),
('Perverted Ice Cream'),
('Pizza Hut'),
('Pizza Inn'),
('Planters'),
('Popeyes'),
('Poptarts'),
('Pringles'),
('Red Lobster'),
('Reese''s'),
('Regal Cinema'),
('Sonic'),
('Sour Patch Kids'),
('Spangles'),
('Starbucks'),
('Stonefire Grill'),
('Subway'),
('Sweet Frog'),
('Taco Bell'),
('The Hummus & Pita Co.'),
('Tim Horton''s'),
('Toppers Pizza'),
('Tropical Smoothie'),
('Vampire Pizza'),
('Wendy''s'),
('Whataburger'),
('White Castle'),
('Wienerschnitzel'),
('Yogurtland'),
('Your Pie'),
('Zaxby''s');

INSERT INTO posts (brand_id, episode_number, episode_title, episode_link, campaign, pr_link)
VALUES
--Template (int, int, 'str', 'str', 'str', 'str/null'),
(78, 304, 'Chicken Soup for Boys', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-304-chicken-soup-boys/', 'Naked Crispy Chicken Taco', null),
(84, 305, 'Bubble Jug Life', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-305-bubble-jug-life/', 'Bacon Mozzarella Burger', 'https://www.prnewswire.com/news-releases/wendys-releases-its-next-hit-single---the-bacon-mozzarella-burger-300273853.html'),
(55, 306, 'Face 2 Face: Foggy Bottoms', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-306-face-2-face-foggy-bottoms/', 'BreadStick Sandwhiches and Deep Dish Spaghetti Pies', 'str/null', 'https://www.prnewswire.com/news-releases/olive-garden-unveils-new-breadstick-sandwiches-and-deep-dish-spaghetti-pies-300274598.html'),
(12, 309, 'Here Comes Ray Donovan', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-309-here-comes-ray-donovan/', 'Burger Mac n'' Cheetos', 'https://www.businesswire.com/news/home/20160627005012/en/BURGER-KING%C2%AE-Restaurants-CHEETOS%C2%AE-Brand-Unleash-Cheesy'),
(27, 312, 'Face 2 Face: Live from Drowzee City', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-312-face-2-face-live-drowzee-city/', 'Burger Pizza', null),
(27, 321, 'Which One Vapes?', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-321-which-one-vapes/', 'Salads', 'https://www.prnewswire.com/news-releases/dominos-launches-salads-nationwide-300313050.html'),
(62, 322, '"Margaret, It Happened Again!"', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-322-margaret-it-happened-again/', 'Grilled Cheese Stuffed Pizza', 'https://blog.pizzahut.com/this-is-not-a-drill-pizza-hut-unleashes-latest-cheesy-goodness-in-all-new-grilled-cheese-stuffed-crust-pizza/'),
(41, 324, 'A Heroic and Well-Reviewed Lizard', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-324-heroic-and-well-reviewed-lizard/', 'Brunchfast Menu', null),
(84, 326, 'Open-Source Burger King', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-326-open-source-burger-king/', 'Taco Salad', 'https://www.prnewswire.com/news-releases/wendys-tacolicious-taco-salad-makes-its-long-awaited-comeback-300338877.html'),
(14, 328, 'The Anxiety Free Cruise', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-328-anxiety-free-cruise/', 'Beer Cheese Bacon Burger', 'https://www.businesswire.com/news/home/20161027005248/en/Carl%E2%80%99s-Jr.-Hardee%E2%80%99s-Introduce-Budweiser-Beer-Cheese'),
(84, 336, 'Twenty-Something-Teen', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-336-twenty-something-teen/', 'Spicy Chicken Sandwich', 'https://www.irwendys.com/news/news-details/2016/Wendys-New-Spicy-Sriracha-Chicken-Sandwich-Takes-Sriracha-To-A-New-Level/default.aspx'),
(78, 340, 'Doritos-Blasted Crow', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-340-doritos-blasted-crow/', 'Naked Chicken Chalupa', null),
(28, 345, 'Face 2 Face: Candlenights in September', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-345-face-2-face-candlenights-september/', 'Boldest Choice Campaign', 'https://www.prnewswire.com/news-releases/doritos-rocks-election-season-to-empower-young-voters-300333737.html'),
(44, 349, 'Face 2 Face: Remembering How do Do Live Shows in Portland', 'https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-349-face-2-face-remembering-how-do-live-shows-portland/', 'Chicken Parm Parmi Pie', 'https://www.perthnow.com.au/community-news/weekend-kwinana-courier/waikiki-womans-chicken-parmi-pie-gets-a-go-at-jesters-c-802844'),
