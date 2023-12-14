// Check if Seekers
if (document.body.textContent.includes('Seekers')) {
	console.log('✅ he is a gigachad');
	var cssId = 'seekersdiff';
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = cssId;
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = './styles.css';
	link.media = 'all';
	head.appendChild(link);
  } else {
	console.log('⛔️ booooo loosers');
  }