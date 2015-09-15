<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Contact Us - Akula Designs - Seamless, Substantive Website Design and Development - Web Developer - Web Design Designer</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
		<div class="container full">
		<div class="container contact">
			<div class="wrapper">
			<p class="uplink"><a href="index.html" class="regular up2 home">home</a></p>
				<div class="wrapper2 titlec">
					<h6 class="bold label">03</h6>
					<h2 class="bold tit">Contact</h2>
				</div>
				<?php
					if (isset($_POST["submit"])) {
						$name = $_POST['name'];
						$email = $_POST['email'];
						$number = $_POST['number'];
						$message = $_POST['description'];
						$from = 'From: site'; 
						$to = 'example@gmail.com'; 
						$subject = 'Contact Form Submit';
						if (!$number) {
							$body = "From: $name\n E-Mail: $email\n Project Brief:\n $message";
						} else {
							$body = "From: $name\n E-Mail: $email\n Number: $number\n Project Brief:\n $message";
						}
						if (mail ($to, $subject, $body, $from)) {
							echo '<div class="alert-centered"><div class="alert alert-success regular">Thank You! We will be in touch.</div></div>';
						} else {
							echo '<div class="alert-centered"><div class="alert alert-danger regular">Something went wrong, please try again.</div></div>';
						}
					}
				?>
				
				<div id="form">
					<form method="post" action="contact.php">
						<div class="contact_left">
							<input id="name" maxlength="80" name="name" size="20" type="text" placeholder="Your Name" required="true">
							<input id="email" maxlength="80" name="email" size="20" type="text" placeholder="Your email address" required="true" data-parsley-type="email">
							<input id="number" maxlength="40" name="number" size="20" type="text" placeholder="Contact number">
						</div>
						<div class="contact_right">
							<textarea name="description" placeholder="Project Brief" required="true"></textarea>
						</div>
						<div class="submit">
							<input id="btn" type="submit" value="Submit" name="submit">
						</div>
					</form>
				</div>

			</div>
		</div>
		<footer>
			<div class="wrapper">
				<div class="backg">
					<div class="links">
						<a href="http://www.akuladesigns.com/index.html" class="light">home</a>|
						<a href="index.html#about" class="light">about</a>|
						<a href="index.html#work" class="light">work</a>|
						<a href="http://www.akuladesigns.com/contact.php" class="light">contact</a>
					</div>
					<div class="copy light">akula &copy; 2015</div>
					<div class="copy light">site by <a href="index.html">akula designs</a></div>
				</div>
			</div>
		</footer>
	</div>

	<script src="jquery-2.1.4.min.js"></script>
	<script src="fadeout.js"></script>
</body>
</html>