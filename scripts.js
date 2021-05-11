window.WebFontConfig = {
			    custom: {
			      families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
			        'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
			        'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
			        'KaTeX_Size4', 'KaTeX_Typewriter'],
			    },
			  };

// Выдвигающееся меню
document.querySelector('.Menu-btn').addEventListener('click', function(e){
	e.preventDefault;
	if (this.classList.contains('Menu-btn_active')) {
		this.classList.remove('Menu-btn_active');
		document.querySelector('.Menu').classList.remove('Menu_active');
		document.querySelector('.Mycontent').classList.remove('Mycontent_active');

		document.querySelector('.description_Sh').classList.remove('description_Sh_active');
		document.querySelector('.description_W').classList.remove('description_W_active');
		document.querySelector('.description_H').classList.remove('description_H_active');
		document.querySelector('.description_M').classList.remove('description_M_active');
		document.querySelector('.description_Had').classList.remove('description_Had_active');
		document.querySelector('.description_L').classList.remove('description_L_active');
	}
	else {
		this.classList.add('Menu-btn_active'); // стрелка
		document.querySelector('.Menu').classList.add('Menu_active'); // активное меню
		document.querySelector('.Mycontent').classList.add('Mycontent_active'); // активное меню

		document.querySelector('.description_Sh').classList.add('description_Sh_active');
		document.querySelector('.description_W').classList.add('description_W_active');
		document.querySelector('.description_H').classList.add('description_H_active');
		document.querySelector('.description_M').classList.add('description_M_active');
		document.querySelector('.description_Had').classList.add('description_Had_active');
		document.querySelector('.description_L').classList.add('description_L_active');
	}
});


// Ватсон
window.addEventListener("load", function () {
	//Ватсон. Коляска
	// находим элемент, в который будем рендерить формулу
	var el = document.getElementById("frac1");
	// вызываем метод библиотеки для отображения формулы
	katex.render("\\frac{4}{3}", el);

	el = document.getElementById("frac2");
	katex.render("\\frac{87}{16}", el);
	el = document.getElementById("frac3");
	katex.render("\\frac{33}{16}", el);
	el = document.getElementById("frac4");
	katex.render("\\frac{139}{48}", el);

	//Ватсон. Эпидемия
	el = document.getElementById("Epid");
	katex.render("f(t)=\\frac{350}{{{(x-45)}^2}+9}", el);
});

//Шерлок
window.addEventListener("load", function () {
	var f = "\\frac{1}{5} \\sin (2t) + \\sqrt{t} + 6";
	var res = document.getElementById('V_dog');
	katex.render(f, res);

	f = "\\frac{1}{2} \\sin (t) + 2\\cdot\\sqrt{t}"
	res = document.getElementById('V_Henry');
	katex.render(f, res);

	f = "\\approx"
	res = document.getElementById('Okolo1');
	katex.render(f, res);
	f = "\\approx"
	res = document.getElementById('Okolo2');
	katex.render(f, res);
	f = "\\approx"
	res = document.getElementById('Okolo3');
	katex.render(f, res);
	
	//CROSSWORD
	f = "d\\displaystyle\\int f(x) dx = f(x) dx"
	res = document.getElementById('formule1');
	katex.render(f, res);
	f = "\\displaystyle\\int"
	res = document.getElementById('formule2');
	katex.render(f, res);
});

// Интегралы для Генри
window.addEventListener("load", function () {
	//First
	var f = "\\displaystyle\\int_{0}^{\\pi} \\sin(x)dx - \
	\\displaystyle\\int_{0}^{\\frac{\\pi}{2}}\\cos(x)dx + \
	\\frac{1}{3}\\displaystyle\\int_{3}^{6} ({x^2}+1)dx";
	var res = document.getElementById("Int1");
	katex.render(f, res);

	//Second
	f = "\\bigg\\vert \\displaystyle\\int_{3\\pi}^{\\frac{21\\pi}{2}} \
	\\cos\\bigg(\\frac{1}{3}x\\bigg) + \\sin\\bigg(\\frac{1}{3}x\\bigg) dx \\bigg\\vert"
	res = document.getElementById('Int2');
	katex.render(f, res);

	//3
	f = "\\displaystyle\\int_{0}^e \\frac{dx}{{x^2}-4} - \
	\\frac{1}{4}\\ln \\bigg\\vert \\frac{e-2}{e+2} \\bigg\\vert \
	+ \\displaystyle\\int_{-2}^4 \\frac{1}{3}{x^2}dx"
	res = document.getElementById('Int3');
	katex.render(f, res);

	//4
	f = "\\displaystyle\\int_{0}^1 {e^x}dx - \\displaystyle\\int_{0}^2 \
	{e^{\\frac{x}{2}}}dx + e"
	res = document.getElementById('Int4');
	katex.render(f, res);

	//5
	f = "\\displaystyle\\int_{-3}^3 ({y^2}-1)dy - \\frac{8}{3}"
	res = document.getElementById('Int5');
	katex.render(f, res);

	//ADD1 5
	f = "[-3, -1] \\cup [1, 3]"
	res = document.getElementById('Int5_add1');
	katex.render(f, res);
	//ADD2 5
	f = "[-1, 1]"
	res = document.getElementById('Int5_add2');
	katex.render(f, res);

	//6
	f = "-\\displaystyle\\int_{-4}^8 \\frac{y}{6}dy + \
	\\displaystyle\\int_{-1}^2 5{x^4}dx"
	res = document.getElementById('Int6');
	katex.render(f, res);
});

//Хадсон
window.addEventListener("load", function () {
	//ПЛОЩАДЬ
	var f = "\\frac{16}{3} {м}^2"
	var res = document.getElementById('S1');
	katex.render(f, res);
	f = "64 {м}^2"
	res = document.getElementById('S2');
	katex.render(f, res);
	f = "\\frac{280}{3} {м}^2"
	res = document.getElementById('S3');
	katex.render(f, res);
	f = "\\frac{716}{3} {м}^2"
	res = document.getElementById('S4');
	katex.render(f, res);
	
	//СВОЙСТВА
	f = "\\displaystyle\\int dF(x) = F(x) + C"
	res = document.getElementById('Formule1');
	katex.render(f, res);
	f = "d\\displaystyle\\int f(x) dx = f(x) dx"
	res = document.getElementById('Formule2');
	katex.render(f, res);
	f = "a < b, то \\displaystyle\\int_a^b f(x)dx \\geqslant 0"
	res = document.getElementById('Formule3');
	katex.render(f, res);
	f = "\\displaystyle\\int_a^b f(x)dx = F(b) - F(a)"
	res = document.getElementById('Formule4');
	katex.render(f, res);
	f = "a<c<b, то \\displaystyle\\int_a^c f(x)dx + \
	\\int_c^b f(x)dx = \\int_a^b f(x)dx"
	res = document.getElementById('Formule5');
	katex.render(f, res);
});

//Лестрейд
window.addEventListener("load", function () {
	var f = "v(t)=-1250\\cdot t+225 \\big(\\frac{м}{c}\\big)"
	var res = document.getElementById('Gun');
	katex.render(f, res);	
});	
	
	
