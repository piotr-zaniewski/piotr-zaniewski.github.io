window.mobileCheck = function () {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function scale(number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function typeText(selector, text, onCompleteCallback = null, delay = 0) {
	var typed = new Typed(selector, {
		strings: [text],
		typeSpeed: 30,
		startDelay: delay,
		onComplete: (self) => {
			if (onCompleteCallback) {
				onCompleteCallback();
			}
		},
	});
}

function removeCursor() {
	$('.typed-cursor').remove();
}

function animateCodeOutput(el, delay = 300) {
	setTimeout(() => {
		removeCursor();
		$(el).css({ 'opacity': 1, 'transform': 'scale(1)' });
	}, delay);
}

function TypeFirst() {
	typeText('#typer-1', 'piotr', TypeSecond, 1500);
	$('.typed-cursor').addClass('typed-cursor--blink');
}

function TypeSecond() {
	removeCursor();
	typeText('#typer-2', '.skills', TypeThird);
}

function TypeThird() {
	removeCursor();
	typeText('#typer-3', '();', () => animateCodeOutput('.code-output'));
	skillsOutput = 'true';
}

function TypeFourth() {
	typeText('#typer-4', 'PrintCredits', TypeFifth, 1500);
	$('.typed-cursor').addClass('typed-cursor--blink');
}

function TypeFifth() {
	removeCursor();
	typeText('#typer-5', '();', () => animateCodeOutput('.code-output-2'));
	creditsOutput = 'true';
}

function RemoveCodeOutput() {
	$('.code-output-2').css({ 'opacity': 0 });
}

let skillsOutput = 'false';
let creditsOutput = 'false';
let creditsPlayed = 'false';
let toggleMenu = 0;

$(window).on('scroll', (e) => {
	const headerHeight = $('.header').height();
	const scrollPosition = window.scrollY;
	const bodyHeight = $('body').height();
	const headerOpacity = clamp(scale(scrollPosition, 0, headerHeight / 2, 1, 0), 0, 1);
	const collapsedHeaderOpacity = clamp(scale(scrollPosition, 0, headerHeight * 10 / 2, -1, 1), -1, 1);
	const tiltedProject = $('.project-tilted');
	const tiltedProjectTop = tiltedProject[0].getBoundingClientRect().top;
	const aboutMeSectionTop = $('.experience-wrapper').offset().top
	const portfolioSectionTop = $('.portfolio-wrapper').offset().top;
	const footerTop = $('.footer').offset().top;
	const navItemWidth = $('.nav').width();
	const verticalDistanceFromBottom = document.documentElement.clientHeight - tiltedProjectTop;
	const tiltedProjectHeight = tiltedProject.height();

	if (scrollPosition <= headerHeight) {
		$('.header').removeClass('collapsed').css({ "opacity": headerOpacity, "transform": "translateY(0)" });
		$('.header .logo').css({ "transform": `translateX(-${scrollPosition / 3}%)`, "opacity": headerOpacity });
		$('.navbar').css({ "transform": `translateX(${scrollPosition / 3}%)`, "opacity": headerOpacity });
		$('.canvas-bottom-fade').css({ 'opacity': '1', 'display': 'block' });
		toggleMenu = 0;
	}

	if (scrollPosition >= headerHeight && toggleMenu == 0) {
		const headerY = clamp(scale(scrollPosition, -20, 300, -20, 20), -20, 10);
		$('.header .logo, .navbar').css({ "transform": "translateX(0)", "opacity": 1 });
		$('.header').css({ 'opacity': '0' }).addClass('collapsed');
		$('.header').css({ "transform": `translateY(${headerY}px) translateX(-50%)`, "opacity": collapsedHeaderOpacity });
		$('.canvas-bottom-fade').css({ 'opacity': '0', 'display': 'none' });
		if (collapsedHeaderOpacity == 1) {
			toggleMenu = 1;
		}
	}

	if (scrollPosition <= aboutMeSectionTop - 200) {
		$('.navbar-indicator').css({ 'left': 2 });
		$('.mobile-nav').removeClass('active');
		$('.mobile-nav-1').addClass('active');
	}

	if (scrollPosition >= aboutMeSectionTop - 200 && scrollPosition <= portfolioSectionTop) {
		$('.navbar-indicator').css({ 'left': navItemWidth + 2 });
		$('.mobile-nav').removeClass('active');
		$('.mobile-nav-2').addClass('active');
	}

	if (scrollPosition >= portfolioSectionTop - 150 && scrollPosition <= footerTop - 200) {
		$('.navbar-indicator').css({ 'left': navItemWidth * 2 + 2 });
		$('.mobile-nav').removeClass('active');
		$('.mobile-nav-3').addClass('active');
	}

	if (scrollPosition >= footerTop - 200) {
		$('.navbar-indicator').css({ 'left': navItemWidth * 3 + 2 });
		$('.mobile-nav').removeClass('active');
		$('.mobile-nav-4').addClass('active');
		if (creditsPlayed == 'false') {
			TypeFourth();
			creditsPlayed = 'true';
		}
	}
	if (verticalDistanceFromBottom >= -200) {
		const tiltAngle = clamp(scale(verticalDistanceFromBottom, 0, tiltedProjectHeight + 100, 15, 0), 0, 15);
		const tiltOpacity = clamp(scale(verticalDistanceFromBottom, 0, tiltedProjectHeight, -0.5, 1), -0.5, 1);
		$(tiltedProject).css("transform", `rotateX(${tiltAngle}deg)`);
		$('.project-tilted-top-left, .project-tilted-bottom-right').css({ "opacity": tiltOpacity, 'transform': `translateY(${tiltAngle * 3}px)` });
	}
});

$(document).ready(function (e) {
	$('.preloader').animate({ 'opacity': 0 }).promise().done(function (e) {
		$('.preloader').remove();
	})
	const isMobile = mobileCheck();

	setTimeout(() => {
		const elements = ['.header', '.landing-title', '.experience-item'];
		$(elements.join(', ')).animate({ 'opacity': 1 }, 500);
		$('.code-wrapper-1').animate({ 'opacity': 1 }, { delay: 400 });
		$('.landing-code').find('.code-wrapper-perspective').css({ 'transform': 'rotate3d(.5,-.866,0,8deg) scale(1)' });
		$('.project-wrapper-vertical').css({ 'visibility': 'visible' });

		setTimeout(() => {
			$('.code-block').css({ 'opacity': 1, 'transform': 'scale(1)' });
			TypeFirst();
		}, 200);

	}, 200);

	if (!isMobile) {
		VanillaTilt.init(document.querySelectorAll(".title-item"), {
			max: 15,
			speed: 4000,
			transition: true,
			easing: "cubic-bezier(.03,.98,.52,.99)",
			perspective: 1000,
		});
	}

	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(".footer,.projects-wrapper", {
		backgroundColor: gsap.getProperty("html", "--theme-dark")
	}, {
		scrollTrigger: {
			trigger: ".footer",
			scrub: true,
			end: "bottom bottom"
		},
		backgroundColor: gsap.getProperty("html", "--theme-0d")
	});

	gsap.fromTo(".project-database, .projects-wrapper", {
		backgroundColor: gsap.getProperty("html", "--theme-0d")
	}, {
		scrollTrigger: {
			trigger: ".project-database",
			scrub: true,
			end: "bottom bottom",
		},
		backgroundColor: gsap.getProperty("html", "--theme-dark")
	});

	const canvas1 = $('.digital-dots-landing')[0];
	const canvas2 = $('.digital-dots-footer')[0];
	const canvas3 = $('.digital-dots')[0];
	const canvas4 = $('.digital-dots')[1];
	const canvas5 = $('.digital-dots')[2];
	const screenWidth = $(window).width();
	const screenHeight = $(window).height();

	function setCanvasSize(canvas, width, height) {
		canvas.width = width;
		canvas.height = height;
	}

	function getRandomDotSize(minSize, maxSize) {
		return Math.random() * (maxSize - minSize) + minSize;
	}

	function getRandomWhiteShade() {
		const threshold = 150;
		return Math.floor(Math.random() * (256 - threshold)) + threshold;
	}

	function drawDotsInsideCircle(canvas, numDots, xCenter, yCenter, landing = 0) {
		let radius = canvas.width / 2.5;
		if (isMobile && landing) {
			radius = canvas.width;
		}
		const ctx = canvas.getContext("2d");
		const centerX = canvas.width / xCenter;
		const centerY = canvas.height / yCenter;
		const gridSize = 10;
		for (let i = 0; i < numDots; i++) {
			const angle = Math.random() * 2 * Math.PI;
			const distance = Math.sqrt(Math.random()) * radius;
			const x = centerX + Math.round(distance * Math.cos(angle) / gridSize) * gridSize;
			const y = centerY + Math.round(distance * Math.sin(angle) / gridSize) * gridSize;
			const dotSize = getRandomDotSize(2, 2);
			const distanceToCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
			const maxDistance = radius;
			const opacity = 1 - distanceToCenter / maxDistance;
			const shade = getRandomWhiteShade();
			ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${opacity})`;
			ctx.beginPath();
			ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
			ctx.fill();
		}
	}

	setCanvasSize(canvas1, screenWidth, screenHeight);
	setCanvasSize(canvas2, screenWidth, screenHeight);
	setCanvasSize(canvas3, 350, 350);
	setCanvasSize(canvas4, 550, 550);
	setCanvasSize(canvas5, 300, 420);

	if (isMobile) {
		drawDotsInsideCircle(canvas1, 1000, 2, 2, 1);
	}
	else {
		drawDotsInsideCircle(canvas1, 2500, 2, 1, 1);
	}
	drawDotsInsideCircle(canvas2, 1500, 2, 1, 1);
	drawDotsInsideCircle(canvas3, 150, 2, 2);
	drawDotsInsideCircle(canvas4, 250, 2, 2);
	drawDotsInsideCircle(canvas5, 180, 2, 2);


	$('.nav').click(function (e) {
		const NavIndex = $(e.currentTarget).data('index');
		const NavItemWidth = $(e.currentTarget).width();
		const NavTargets = ['.light-rays-top', '.experience-wrapper', '.portfolio-wrapper', '.footer'];
		const TargetOffsetTop = $(NavTargets[NavIndex - 1]).offset().top;
		const CurrentOffsetTop = window.scrollY;
		const HeightDifference = Math.abs(TargetOffsetTop - CurrentOffsetTop);
		const ScrollSpeed = clamp(scale(HeightDifference, 0, $('body').height(), 1000, 3000), 1000, 3000)
		let offset = 0;
		if (NavIndex == 2) {
			offset = -100;
		}
		const UserPadding = (NavIndex === 4) ? 0 : -100;
		$('html, body').animate({ scrollTop: $(NavTargets[NavIndex - 1]).offset().top + offset }, ScrollSpeed);
	});

	$('.code-output-2').find('span').click(function (e) {
		const link = $(e.currentTarget).data('url');
		window.open(link, '_blank');
	});

	$('.mobile-open').click(function (e) {
		$('body').css({ 'position': 'relative' }).animate({ 'left': '-10px' }, { 'delay': 400 });
		$('.mobile-close').css('display', 'flex').animate({ 'opacity': '1' }, { 'delay': 400 });
		$('.mobile-navbar').css('display', 'flex').animate({ 'opacity': '1', 'right': '0px' }, { 'delay': 400 });
	});

	$('.mobile-close').click(function (e) {
		$('body').animate({ 'left': '0' }, { 'delay': 400 });
		$('.mobile-close').animate({ 'opacity': '0' }, { 'delay': 400 }).promise().done(function (e) {
			$('.mobile-close').css('display', 'none');
		});
		$('.mobile-navbar').animate({ 'opacity': '0', 'right': '-10px' }, { 'delay': 400 }).promise().done(function (e) {
			$('.mobile-navbar').css({ 'display': 'none' });
		});
	});

	$('.mobile-nav').click(function (e) {
		const NavIndex = $(e.currentTarget).data('index');
		const NavItemWidth = $(e.currentTarget).width();
		const NavTargets = ['.light-rays-top', '.experience-wrapper', '.portfolio-wrapper', '.footer'];
		const TargetOffsetTop = $(NavTargets[NavIndex - 1]).offset().top;
		const CurrentOffsetTop = window.scrollY;
		const HeightDifference = Math.abs(TargetOffsetTop - CurrentOffsetTop);
		const ScrollSpeed = clamp(scale(HeightDifference, 0, $('body').height(), 1000, 3000), 1000, 3000)
		let offset = 0;
		if (NavIndex == 2) {
			offset = -100;
		}
		const UserPadding = (NavIndex === 4) ? 0 : -100;
		$('.navbar-indicator').css({ 'left': (NavItemWidth) * (NavIndex - 1) + 2 });
		$('.mobile-nav').removeClass('active');
		$('.mobile-close').animate({ 'opacity': '0' }, { 'delay': 400 }).promise().done(function (e) {
			$('.mobile-close').css('display', 'none');
		});
		$('.mobile-navbar').animate({ 'opacity': '0', 'right': '-10px' }, { 'delay': 400 }).promise().done(function (e) {
			$('.mobile-navbar').css({ 'display': 'none' });
		});
		$('.header .logo').animate({ 'left': '0px' }, { 'delay': 400 });
		$('body').animate({ 'left': '0' }, { 'delay': 400 });
		$('html, body').animate({ scrollTop: $(NavTargets[NavIndex - 1]).offset().top + offset }, ScrollSpeed);
	});

	$('.skills-refresh').click(function (e) {
		if (skillsOutput == 'true') {
			$('.code-output').css({ 'opacity': '', 'transform': '' });
			$('#typer-1, #typer-2, #typer-3').html('');
			skillsOutput = 'false';
			TypeFirst();
		}
	});
	$('.credits-refresh').click(function (e) {
		if (creditsOutput == 'true') {
			$('.code-output-2').css({ 'opacity': '', 'transform': '' });
			$('#typer-4, #typer-5').html('');
			creditsOutput = 'false';
			TypeFourth();
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const isMobile = mobileCheck();

});
