/*
var feed = new Instafeed({
    get: 'user',
    userId: 388769354,
    accessToken: '388769354.467ede5.cfa5e85f62734e78985cf6a94a2e3422',
//     clientId: '7b24e3e24caf4067bdfaf529202f54a0'
	template: '<a href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();
*/


$block = $('.block');
for(var i = 0; i <= 8; i++) {
	var h = i * 7.2;
	var s = i * 2;
	var l = i + 50;
	
	var rando_a = rando(5,65);
	var rando_b = rando(5,65);
	var rando_c = rando(0,95);
	
	style 	= 'background-color:white;' 
			+ 'left: ' + rando_a + '%;' 
			+ 'top: ' + rando_b + '%;'
			+ 'transform: rotate(' + rando_c + 'deg);' + 'font-size:1em;';
	
	console.log(i);
	
	$block.append(''
	+ 	'<div class="img drag" id="' + i +'"' 
	+	'style="' + style + '"> '+ i +'</div>');
	if(i === 0) {
	document.getElementById('0').innerHTML = '<p style="font-size: 3em; width:300px; height: 400px; overflow:hidden; color:black; line-height:1em; position:absolute; top:50px; left:0px; ">FUCK <br/> CONTENT <br/><br/> Michael Rock <br/> 2009</p> ';
	} else{
		if(i === 1){
	document.getElementById('1').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  "> In Designer as Author I argued that we are insecure about the value of our work. We are envious of the power, social position and cachet that artists and authors seem to command. By declaring ourselves "designer/authors" we hope to garner similar respect. Our deep-seated anxiety has motivated a movement in design that values origination of content over manipulation of content. <br/><br/> Designer as Author was an attempt to recuperate the act of design itself as essentially linguistic—a vibrant, evocative language. However, it has often been read as a call for designers to generate content: in effect, to become designers and authors, not designers as authors. While I am all for more authors, that was not quite the point I wanted to make. <br/><br/> </p> <p style="position:relative; top:150px; text-align:center; color: red;">1</p> '
		} else {
			if(i === 2){
		document.getElementById('2').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  "> The problem is one of content. The misconception is that without deep content, design is reduced to pure style, a bag of dubious tricks. In graphic-design circles, form-follows-function is reconfigured as form-follows-content. If content is the source of form, always preceding it and imbuing it with meaning, form without content (as if that were even possible) is some kind of empty shell. <br/><br/>The apotheosis of this notion, repeated ad nauseum (still!), is Beatrice Wardes famous Crystal Goblet metaphor, which asserts that design (the glass) should be a transparent vessel for content (the wine). Anyone who favored the ornate or the bejeweled was a knuckle-dragging oaf. Agitators on both sides of the ideological spectrum took up the debate: minimalists embraced it as a manifesto; maximalists decried it as aesthetic fascism. Neither camp questioned the basic, implicit premise: its all about the wine. </p><p style="position:relative; top:150px; text-align:center; color: red;">2</p>  '	
			} else {
				if(i === 3){
					document.getElementById('3').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  "> This false dichotomy has circulated for so long that we have started to believe it ourselves. It has become a central tenet of design education and the benchmark against which all design is judged. We seem to accept the fact that developing content is more essential than shaping it, that good content is the measure of good design.<br/><br/>Back when Paul Rand wrote "There is no such thing as bad content, only bad form," I remember being intensely annoyed. I took it as an abdication of a designers responsibility to meaning. Over time, I have come to read it differently: he was not defending hate speech or schlock or banality; he meant that the designers purview is to shape, not to write. But that shaping itself is a profoundly affecting form. (Perhaps this is the reason that modern designers—Rand, Munari, Leoni—always seem to end their careers designing childrens books. The childrens book is the purest venue of the designer/author because the content is negligible and the evocative potential of the form unlimited.)?  </p><p style="position:relative; top:175px; text-align:center; color: red;">3</p>  '	
				} else {
					if(i === 4) {
						document.getElementById('4').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  "> So what else is new? This seems to be a rather mundane point, but for some reason we dont really believe it. We dont believe shaping is enough. So to bring design out from under the thumb of content we must go one step further and observe that treatment is, in fact, a kind of text itself, as complex and referential as any traditional understanding of content. <br/><br/>A director can be the esteemed auteur of a film he didnt write, score, edit or shoot. What makes a Hitchcock film a Hitchcock film is not the story but a consistency of style, which winds intact through different technologies, plots, actors, and time periods like a substance of its own. Every film is about filmmaking. His great genius is that he is able to mold the form into his style in a genuinely unique and entertaining way. The meaning of his work is not in the story but in the storytelling.   </p><p style="position:relative; top:175px; text-align:center; color: red;">4</p>  '
					} else {
						if(i === 5){
							document.getElementById('5').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  ">Designers also trade in storytelling. The elements we must master are not the content narratives but the devices of the telling: typography, line, form, color, contrast, scale, weight. We speak through our assignment, literally between the lines.  <br/><br/>The span of graphic design is not a history of concepts but of forms. Form has evolved dramatically from one year to the next, and suggests a profession that continually revises and reshapes the world through the way it is rendered. Stellar examples of graphic design, design that changes the way we look at the world, are often found in service of the most mundane content: an ad for ink, cigarettes, sparkplugs or machinery. Think of Piet Zwarts catalogues for electrical cable; or the travel posters of Cassandre or Matter; or the New Wave work of Weingart, Greiman and Freidman; or the punk incitations of Jamie Reid, in which the manipulation of form has an essential, even transformative, meaning.  </p><p style="position:relative; top:175px; text-align:center; color: red;">5</p>  '
						} else {
							if (i === 6) {
								document.getElementById('6').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  ">At a 1962 conference at the Museum of Modern Art, conservative art critic Hilton Kramer denounced Pop Art as "indistinguishable from advertising art" because "Pop Art does not tell us what it feels like to be living through the present moment of civilization. Its social effect is simply to reconcile us to a world of commodities, banalities and vulgarities." But perhaps the content of graphic design is exactly that: an evocation of "what it feels like to be living through the present moment of civilization," with all its "commodities, banalities and vulgarities." How else can we discuss the content of a typeface or why the typography of a surfing magazine suddenly becomes relevant? Or how a series of made-up or self-initiated posters—already a medium of dubious functionality— can end up on the wall of a major design museum? Work must be saying something, which is different than being about something.  </p><p style="position:relative; top:175px; text-align:center; color: red;">6</p>  '
							} else {
								if(i === 7) {
									document.getElementById('7').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  ">Because the nature of the designed object is limited, individual objects are rarely substantial enough to contain fully rendered ideas. Ideas develop over many projects, spanning years. Form itself is indexical. We are intimately, physically connected to the work we produce, and it is inevitable that our work bears our stamp. The choice of projects in each designers oeuvre lays out a map of interests and proclivities. (I use the singular designer in the categorical sense, not the individual.) The way those projects are parsed out, disassembled, reorganized and rendered reveals a philosophy, an aesthetic position, an argument and a critique.  <br/><br/>This deep connection to making also positions design in a modulating role between the user and the world. By manipulating form, design reshapes that essential relationship. Form is replaced by exchange. The things we make negotiate a relationship over which we have a profound control.  </p><p style="position:relative; top:175px; text-align:center; color: red;">7</p>  '
								} if(i === 8) {
									document.getElementById('8').innerHTML = '<p style="font-size: 9px; width:200px; height: 400px; overflow:hidden; color:black; line-height:1.5em; position:absolute; top:20px; left:50px; text-align: left; text-transform:none;  ">The trick is to find ways to speak through treatment, via a range of rhetorical devices—?from the written to the visual to the operational—to make those proclamations as poignant as possible, and to return consistently to central ideas, to re-examine and re-express. In this way we build a body of work, and from that body of work emerges a singular message, maybe even what it feels like to be living now. As a popular film critic once wrote, "A movie is not what it is about, its how it is about it." Likewise, for us, our What is a How. Our content is, perpetually, Design itself.  </p><p style="position:relative; top:175px; text-align:center; color: red;">8 - END</p>  '
								}
							}
						}
					}
				}
			} 
		}
		} 
	}
	
	




var $draggable = $('.drag').draggabilly({
  // options...
})


function rando(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


