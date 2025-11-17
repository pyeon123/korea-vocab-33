const quizzes = [
  {answer:"hot (weather)", korean:"덥다", roman:"deop-tta", polite:"더워요", politeRoman:"deo-wo-yo", casual:"더워", 
casualRoman:"deo-wo", explanation:"덥다 (deop-tta) — to be hot (weather)."},
  {answer:"cold (weather)", korean:"춥다", roman:"chup-tta", polite:"추워요", politeRoman:"chu-wo-yo", casual:"추워", casualRoman:"chu-wo", explanation:"춥다 (chup-tta) — to be cold (weather)."},
  {answer:"warm", korean:"따뜻하다", roman:"tta-tteut-ha-da", polite:"따뜻해요", politeRoman:"tta-tteu-tae-yo", casual:"따뜻해", casualRoman:"tta-tteu-tae", explanation:"따뜻하다 (tta-tteut-ha-da) — to be warm."},
  {answer:"cool / refreshing", korean:"시원하다", roman:"si-won-ha-da", polite:"시원해요", politeRoman:"si-won-hae-yo", casual:"시원해", casualRoman:"si-won-hae", explanation:"시원하다 (si-won-ha-da) — to be cool / refreshing."},
  {answer:"hot (object)", korean:"뜨겁다", roman:"tteu-geop-tta", polite:"뜨거워요", politeRoman:"tteu-geo-wo-yo", casual:"뜨거워", casualRoman:"tteu-geo-wo", explanation:"뜨겁다 (tteu-geop-tta) — to be hot (thing, object)."},
  {answer:"cold (object)", korean:"차갑다", roman:"cha-gap-tta", polite:"차가워요", politeRoman:"cha-ga-wo-yo", 
casual:"차가워", casualRoman:"cha-ga-wo", explanation:"차갑다 (cha-gap-tta) — to be cold (object, food, touch)."},
  {answer:"many / much", korean:"많다", roman:"man-ta", polite:"많아요", politeRoman:"ma-na-yo", casual:"많아", casualRoman:"ma-na", explanation:"많다 (man-ta) — to be many / much."},
  {answer:"few / little", korean:"적다", roman:"jeok-tta", polite:"적어요", politeRoman:"jeo-geo-yo", casual:"적어", casualRoman:"jeo-geo", explanation:"적다 (jeok-tta) — to be few / little."},
  {answer:"fast", korean:"빠르다", roman:"ppa-reu-da", polite:"빨라요", politeRoman:"ppal-la-yo", casual:"빨라", casualRoman:"ppal-la", explanation:"빠르다 (ppa-reu-da) — to be fast."},
  {answer:"slow", korean:"느리다", roman:"neu-ri-da", polite:"느려요", politeRoman:"neu-ryeo-yo", casual:"느려", casualRoman:"neu-ryeo", explanation:"느리다 (neu-ri-da) — to be slow."},
  {answer:"easy", korean:"쉽다", roman:"swip-tta", polite:"쉬워요", 
politeRoman:"swi-wo-yo", casual:"쉬워", casualRoman:"swi-wo", explanation:"쉽다 (swip-tta) — to be easy."},
  {answer:"difficult", korean:"어렵다", roman:"eo-ryeop-tta", polite:"어려워요", politeRoman:"eo-ryeo-wo-yo", casual:"어려워", casualRoman:"eo-ryeo-wo", explanation:"어렵다 (eo-ryeop-tta) — to be difficult."},
  {answer:"new", korean:"새롭다", roman:"sae-rop-tta", polite:"새로워요", politeRoman:"sae-ro-wo-yo", casual:"새로워", casualRoman:"sae-ro-wo", explanation:"새롭다 (sae-rop-tta) — to be new."},
  {answer:"old (thing)", korean:"오래되다", roman:"o-rae-dwe-da", polite:"오래돼요", politeRoman:"o-rae-dwae-yo", casual:"오래돼", casualRoman:"o-rae-dwae", explanation:"오래되다 (o-rae-dwe-da) — to be old (thing)."},
  {answer:"clean", korean:"깨끗하다", roman:"kkae-kkeut-ha-da", polite:"깨끗해요", politeRoman:"kkae-kkeu-tae-yo", casual:"깨끗해", casualRoman:"kkae-kkeu-tae", explanation:"깨끗하다 (kkae-kkeut-ha-da) — to be clean."},
  {answer:"dirty", korean:"더럽다", roman:"deo-reop-tta", polite:"더러워요", politeRoman:"deo-reo-wo-yo", casual:"더러워", casualRoman:"deo-reo-wo", explanation:"더럽다 (deo-reop-tta) — to be 
dirty."},
  {answer:"comfortable", korean:"편안하다", roman:"pyeo-nan-ha-da", polite:"편안해요", politeRoman:"pyeo-nan-hae-yo", casual:"편안해", casualRoman:"pyeo-nan-hae", explanation:"편안하다 (pyeo-nan-ha-da) — to be comfortable."},
  {answer:"uncomfortable", korean:"불편하다", roman:"bul-pyeon-ha-da", polite:"불편해요", politeRoman:"bul-pyeon-hae-yo", casual:"불편해", casualRoman:"bul-pyeon-hae", explanation:"불편하다 (bul-pyeon-ha-da) — to be uncomfortable."},
  {answer:"strong", korean:"튼튼하다", roman:"teun-teun-ha-da", polite:"튼튼해요", politeRoman:"teun-teun-hae-yo", casual:"튼튼해", casualRoman:"teun-teun-hae", explanation:"튼튼하다 (teun-teun-ha-da) — to be strong / sturdy."},
  {answer:"weak", korean:"약하다", roman:"yak-ha-da", polite:"약해요", politeRoman:"yak-hae-yo", casual:"약해", casualRoman:"yak-hae", explanation:"약하다 (yak-ha-da) — to be weak."}
];

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

const shuffledQuizzes = shuffle([...quizzes]);
let currentQuiz = 0;

function loadQuiz(){
  const quiz = shuffledQuizzes[currentQuiz];
  document.getElementById("quiz-word").innerText = quiz.answer;
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const nextBtn = document.getElementById("nextBtn");

  optionsEl.innerHTML="";
  resultEl.innerHTML="";
  nextBtn.style.display="none";

  const otherOptions = shuffle(quizzes.filter(q=>q.answer!==quiz.answer)).slice(0,2);
  const optionSet = shuffle([quiz, ...otherOptions]);
  
  optionSet.forEach(opt=>{
    const row=document.createElement("div");
    row.className="option-row";

    const btn=document.createElement("button");
    btn.className="answer-btn";
    btn.innerText=`${opt.korean} (${opt.roman})`;
    btn.onclick=()=>checkAnswer(opt,quiz.answer);

    const sb=document.createElement("button");
    sb.className="sound-btn";
    sb.innerText="🔊";
    sb.onclick=()=>playSound(opt.korean);

    row.appendChild(btn);
    row.appendChild(sb);
    optionsEl.appendChild(row);
  });
}

function checkAnswer(selectedOpt, correctAnswer){
  const resultEl=document.getElementById("result");
  if(selectedOpt.answer===correctAnswer){
    resultEl.style.color="green";
    resultEl.innerHTML=`
      ✅ Correct!
      <b>${selectedOpt.korean}</b> (${selectedOpt.roman})
      <div class="breakdown">
        <b>Word Meaning:</b><br>
        ${selectedOpt.explanation}
        <div class="formality">
          <b>Casual:</b> ${selectedOpt.casual} (${selectedOpt.casualRoman})
          <button class="sound-btn" onclick="playSound('${selectedOpt.casual}')">🔊</button><br>
          <b>Polite:</b> ${selectedOpt.polite} (${selectedOpt.politeRoman})
          <button class="sound-btn" onclick="playSound('${selectedOpt.polite}')">🔊</button>
        </div>
      </div>`;
    document.getElementById("nextBtn").style.display="block";
  } else {
    resultEl.style.color="red";
    resultEl.innerText="❌ Wrong! Try again.";
  }
}

function nextQuiz(){
  currentQuiz++;
  if(currentQuiz>=shuffledQuizzes.length){
    document.getElementById("quiz-word").innerText="🎉 You completed all questions!";
    document.getElementById("options").innerHTML="";
    document.getElementById("result").innerText="";
    document.getElementById("nextBtn").style.display="none";
    return;
  }
  loadQuiz();
}

function playSound(text){
  if(!("speechSynthesis" in window)) return;
  const u=new SpeechSynthesisUtterance(text);
  u.lang="ko-KR";
  u.rate=0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 페이지 로드 시 퀴즈 시작
loadQuiz();

