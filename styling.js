// Check if Seekers
if (document.body.textContent.includes('Seekers')) {
	console.log('✅ he is a gigachad');
	var cssId = 'seekersdiff';
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('style');
	link.link = "https://raw.githubusercontent.com/KeyZox71/seekersrealcolor/main/styles.css";
	head.appendChild(link);
  } else {
	console.log('⛔️ booooo loosers');
  }