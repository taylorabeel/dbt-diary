function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var DAY_FULL = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var ALL_EMOTIONS = ["Alienated", "Ambivalent", "Anger", "Annoyed", "Anxious", "Apathetic", "Apprehensive", "At Ease", "Balanced", "Blessed", "Blissful", "Bored", "Calm", "Carefree", "Cheerful", "Chill", "Comfortable", "Complacent", "Concerned", "Content", "Contempt", "Cozy", "Depressed", "Desolate", "Despairing", "Despondent", "Disappointed", "Discouraged", "Disgusted", "Disheartened", "Down", "Drained", "Easygoing", "Ecstatic", "Elated", "Energized", "Enraged", "Enthusiastic", "Excited", "Exhausted", "Exhilarated", "Fatigued", "Fear", "Festive", "Focused", "Frightened", "Frustrated", "Fulfilled", "Fuming", "Furious", "Glum", "Grateful", "Happy", "Hopeful", "Hopeless", "Hyper", "Inspired", "Irritated", "Jittery", "Joy", "Lively", "Livid", "Lonely", "Loving", "Mellow", "Miserable", "Morose", "Motivated", "Nervous", "Numb", "Optimistic", "Overwhelmed", "Pain", "Panicked", "Peaceful", "Peeved", "Pessimistic", "Playful", "Pleasant", "Pleased", "Pride", "Relaxed", "Repulsed", "Restful", "Restless", "Sad", "Satisfied", "Secure", "Serene", "Shame", "Shocked", "Sleepy", "Spent", "Stressed", "Stunned", "Sullen", "Surprised", "Tense", "Thoughtful", "Thrilled", "Tired", "Touched", "Tranquil", "Troubled", "Uneasy", "Upbeat", "Worried"];

// Mood Meter quadrant taxonomy (Marc Brackett) — used for picker grouping & quadrant trends.
var MOOD_METER = {
  red: {
    label: "High Energy",
    sublabel: "Unpleasant",
    color: "#c0513a",
    bg: "#f5e8e6",
    emotions: ["Anger", "Annoyed", "Anxious", "Apprehensive", "Concerned", "Contempt", "Enraged", "Fear", "Frightened", "Frustrated", "Fuming", "Furious", "Irritated", "Jittery", "Livid", "Nervous", "Overwhelmed", "Pain", "Panicked", "Peeved", "Repulsed", "Restless", "Shame", "Shocked", "Stressed", "Stunned", "Tense", "Troubled", "Uneasy", "Worried"]
  },
  yellow: {
    label: "High Energy",
    sublabel: "Pleasant",
    color: "#b8922a",
    bg: "#faf3e0",
    emotions: ["Blissful", "Cheerful", "Ecstatic", "Elated", "Energized", "Enthusiastic", "Excited", "Exhilarated", "Festive", "Focused", "Happy", "Hopeful", "Hyper", "Inspired", "Joy", "Lively", "Motivated", "Optimistic", "Playful", "Pleasant", "Pleased", "Pride", "Surprised", "Thrilled", "Upbeat"]
  },
  blue: {
    label: "Low Energy",
    sublabel: "Unpleasant",
    color: "#4a7aaa",
    bg: "#e8eef5",
    emotions: ["Alienated", "Ambivalent", "Apathetic", "Bored", "Depressed", "Desolate", "Despairing", "Despondent", "Disappointed", "Discouraged", "Disgusted", "Disheartened", "Down", "Drained", "Exhausted", "Fatigued", "Glum", "Hopeless", "Lonely", "Miserable", "Morose", "Numb", "Pessimistic", "Sad", "Spent", "Sullen", "Tired"]
  },
  green: {
    label: "Low Energy",
    sublabel: "Pleasant",
    color: "#4a8a5e",
    bg: "#e6f0eb",
    emotions: ["At Ease", "Balanced", "Blessed", "Calm", "Carefree", "Chill", "Comfortable", "Complacent", "Content", "Cozy", "Easygoing", "Fulfilled", "Grateful", "Loving", "Mellow", "Peaceful", "Relaxed", "Restful", "Satisfied", "Secure", "Serene", "Sleepy", "Thoughtful", "Touched", "Tranquil"]
  }
};

// Reverse lookup: emotion name -> quadrant key. Used for trends and quadrant chips.
var EMOTION_TO_QUADRANT = function () {
  var m = {};
  for (var _i = 0, _Object$entries = Object.entries(MOOD_METER); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      q = _Object$entries$_i[1];
    var _iterator = _createForOfIteratorHelper(q.emotions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var em = _step.value;
        m[em] = key;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return m;
}();
var DEFAULT_EMOTIONS = ["Sad", "Anger", "Joy", "Anxious", "Hopeful", "Grateful"];
var SKILLS_SCALE = ["0 — Not thought about", "1 — Thought, didn't use (didn't want to)", "2 — Thought, didn't use (wanted to)", "3 — Tried, couldn't do it", "4 — Used, didn't help", "5 — Used, helped", "6 — Used automatically, didn't help", "7 — Used automatically, helped"];
var ALL_SKILLS_LIST = ["Wise Mind", "Observe", "Describe", "Participate", "One Mindfully", "Non-judgmentally", "Effectively", "DEAR MAN", "GIVE", "FAST", "Prioritize Your Goals", "Saying No / Limits", "Physical Illness (PLEASE)", "Balanced Eating (PLEASE)", "Avoid Substances (PLEASE)", "Balanced Sleep (PLEASE)", "Exercise (PLEASE)", "Build Mastery (PLEASE)", "Opposite Action", "Emotion as a Wave", "Check the Facts", "Increase Positive Events", "Activities (ACCEPTS)", "Contribution (ACCEPTS)", "Comparison (ACCEPTS)", "Opposite Emotions (ACCEPTS)", "Pushing Away (ACCEPTS)", "Thoughts (ACCEPTS)", "Self-Soothe (ACCEPTS)", "Temperature (TIPP)", "Intense Exercise (TIPP)", "Paced Breathing (TIPP)", "Paired Muscle Relaxation (TIPP)", "Imagery (IMPROVE)", "Meaning (IMPROVE)", "Prayer (IMPROVE)", "Relaxation (IMPROVE)", "One Thing Now (IMPROVE)", "Vacation (IMPROVE)", "Encouragement (IMPROVE)", "Pros & Cons", "Radical Acceptance", "Willingness", "Half-Smile", "Observe the Breath"];
var SKILLS_REFERENCE = [{
  module: "🧘 Core Mindfulness",
  color: "#7a9e87",
  skills: [{
    category: "Wise Mind",
    name: "Wise Mind",
    desc: "Access the center between emotion mind and logical mind. Pause, breathe, and ask: what does my deepest self know is true? Trust quiet inner knowing."
  }, {
    category: "WHAT",
    name: "Observe",
    desc: "Just notice your experience without reacting. Watch your thoughts like clouds passing — don't grab them or push them away. Try urge surfing — notice an urge without acting on it."
  }, {
    category: "WHAT",
    name: "Describe",
    desc: "Put words on what you notice. Label facts and feelings without judging. E.g., I notice tension in my chest instead of I'm falling apart."
  }, {
    category: "WHAT",
    name: "Participate",
    desc: "Throw yourself fully into the moment. Stop watching yourself and just do. Lose self-consciousness — like dancing without checking the mirror."
  }, {
    category: "HOW",
    name: "One Mindfully",
    desc: "Do one thing at a time. Focus your whole attention on the current activity. When your mind wanders, gently bring it back."
  }, {
    category: "HOW",
    name: "Non-judgmentally",
    desc: "Stick to the facts. Notice when you're judging and say just the facts instead. Don't judge your judging — just notice and re-focus."
  }, {
    category: "HOW",
    name: "Effectively",
    desc: "Do what works, not what's right. Focus on your goals, not winning the argument. Ask: Is what I'm doing helping me get where I want to go?"
  }]
}, {
  module: "🤝 Interpersonal Effectiveness",
  color: "#b08a6e",
  skills: [{
    category: "Objectives",
    name: "DEAR MAN",
    desc: "Describe the situation. Express how you feel. Assert what you want. Reinforce the other person. Mindfully stay focused. Appear confident. Negotiate."
  }, {
    category: "Relationship",
    name: "GIVE",
    desc: "Be Gentle (no attacks). Stay Interested (listen). Validate (acknowledge their view). Use an Easy manner (be light, not rigid)."
  }, {
    category: "Self-Respect",
    name: "FAST",
    desc: "Be Fair to yourself and others. No apologies when not warranted. Stick to your values. Be Truthful — don't lie, exaggerate, or act helpless."
  }, {
    category: "Intensity",
    name: "Prioritize Your Goals",
    desc: "Before a hard conversation, ask: Am I going for (1) my objective, (2) the relationship, or (3) self-respect? Let that decide your approach."
  }, {
    category: "Intensity",
    name: "Saying No / Limits",
    desc: "It's okay to say no. Validate the other person's request, then firmly decline. Limits protect relationships — yours and theirs."
  }]
}, {
  module: "💛 Emotion Regulation",
  color: "#c8a84b",
  skills: [{
    category: "PLEASE",
    name: "Physical Illness",
    desc: "Treat illness promptly. A body in pain can't regulate emotions well."
  }, {
    category: "PLEASE",
    name: "Balanced Eating",
    desc: "Don't go too long without eating. Avoid too much sugar or caffeine. Notice how food affects your mood."
  }, {
    category: "PLEASE",
    name: "Avoid Substances",
    desc: "Alcohol and mood-altering drugs interfere with emotional balance. When stressed, use a skill instead."
  }, {
    category: "PLEASE",
    name: "Balanced Sleep",
    desc: "Consistent sleep — same time to bed, same wake time — regulates emotions dramatically. Protect your sleep."
  }, {
    category: "PLEASE",
    name: "Exercise",
    desc: "Even 10 minutes of movement can shift your emotional state. Build it into your day like a medication."
  }, {
    category: "PLEASE",
    name: "Build Mastery",
    desc: "Do one thing each day that gives you a sense of accomplishment. Small wins build confidence."
  }, {
    category: "Regulation",
    name: "Opposite Action",
    desc: "Fear → approach it gently. Guilt → apologize or let it go. Sadness → get active. Anger → avoid, be gentle and empathetic."
  }, {
    category: "Regulation",
    name: "Emotion as a Wave",
    desc: "Don't amplify or suppress — just ride it. Let the emotion come and go like a wave. Observe without judgment."
  }, {
    category: "Regulation",
    name: "Check the Facts",
    desc: "Ask: Does my emotion fit the facts of the situation? Is my interpretation accurate?"
  }, {
    category: "Regulation",
    name: "Increase Positive Events",
    desc: "Actively build positive experiences. Short-term: do something pleasant today. Long-term: work toward goals that matter."
  }]
}, {
  module: "🛡️ Distress Tolerance",
  color: "#8a7eb0",
  skills: [{
    category: "ACCEPTS",
    name: "Activities",
    desc: "Distract with activities that absorb your attention. Exercise, hobbies, games, cleaning — anything engaging."
  }, {
    category: "ACCEPTS",
    name: "Contribution",
    desc: "Help someone else. Shift focus off yourself. Even a small act of kindness changes your emotional state."
  }, {
    category: "ACCEPTS",
    name: "Comparison",
    desc: "Compare to a time you felt worse and survived, or to others facing greater difficulty."
  }, {
    category: "ACCEPTS",
    name: "Opposite Emotions",
    desc: "Do something that creates a different emotion — funny video, upbeat music, an action movie."
  }, {
    category: "ACCEPTS",
    name: "Pushing Away",
    desc: "Mentally leave the situation for now. Refuse to think about it until you're in a calmer state."
  }, {
    category: "ACCEPTS",
    name: "Thoughts",
    desc: "Replace the distressing thought with a different one. Count, name objects, focus on something neutral."
  }, {
    category: "ACCEPTS",
    name: "Self-Soothe",
    desc: "Use your 5 senses: something to see (beauty), hear (music), smell (candle), taste (tea), touch (soft blanket)."
  }, {
    category: "TIPP",
    name: "Temperature",
    desc: "Splash cold water on your face or hold ice. Cold triggers the dive reflex — your heart rate slows within seconds."
  }, {
    category: "TIPP",
    name: "Intense Exercise",
    desc: "Burn off the emotion physically. Sprint, do jumping jacks, push-ups — even 20-30 seconds can break the flood."
  }, {
    category: "TIPP",
    name: "Paced Breathing",
    desc: "Slow your exhale longer than your inhale. Inhale 4 counts, exhale 6-8 counts. Activates your calm-down system."
  }, {
    category: "TIPP",
    name: "Paired Muscle Relaxation",
    desc: "Tense a muscle group hard for 5 seconds, then release. Work through your body from feet to face."
  }, {
    category: "IMPROVE",
    name: "Imagery",
    desc: "Imagine a safe, calming place. Visualize a positive outcome. Picture yourself coping well."
  }, {
    category: "IMPROVE",
    name: "Meaning",
    desc: "Find or create meaning in the moment. Ask: what can I learn? How might this serve me later?"
  }, {
    category: "IMPROVE",
    name: "Prayer",
    desc: "Connect to something larger than yourself — God, nature, humanity. Ask for strength to bear what is."
  }, {
    category: "IMPROVE",
    name: "Relaxation",
    desc: "Deep breathing, progressive muscle relaxation, yoga, massage. Let your body tell your mind it's okay."
  }, {
    category: "IMPROVE",
    name: "One Thing Now",
    desc: "Bring your full attention to just this moment. What is happening right now? Not the past or future."
  }, {
    category: "IMPROVE",
    name: "Vacation",
    desc: "Give yourself a brief mental or physical break — a walk, a nap, a show. Brief escapes are healthy coping."
  }, {
    category: "IMPROVE",
    name: "Encouragement",
    desc: "Talk kindly to yourself: This is hard and I can do hard things. Cheerlead yourself through."
  }, {
    category: "Crisis",
    name: "Pros & Cons",
    desc: "Write out pros and cons of tolerating vs. acting on the crisis urge. Use it before acting impulsively."
  }, {
    category: "Acceptance",
    name: "Radical Acceptance",
    desc: "Fully accept reality as it is — not approval, just acknowledgment. Fighting what is only adds suffering."
  }, {
    category: "Acceptance",
    name: "Willingness",
    desc: "Say yes to the moment. Replace I won't with I will do what is needed right now."
  }, {
    category: "Acceptance",
    name: "Half-Smile",
    desc: "Gently turn the corners of your mouth up — not fake happiness, but a soft acceptance. Let your face lead."
  }, {
    category: "Acceptance",
    name: "Observe the Breath",
    desc: "Notice each inhale and exhale. Count breaths 1-10 and repeat. Anchor yourself in the body."
  }]
}];
var STORAGE_KEY = "dbt-diary-v2";

/* ============================================================
   PDF EXPORT  (added)
   Loads jsPDF + autotable lazily from cdnjs, renders the
   "DBT Weekly Diary Card" format used for the therapist hand-off.
   ============================================================ */
function ensureJsPdf() {
  return _ensureJsPdf.apply(this, arguments);
}
function _ensureJsPdf() {
  _ensureJsPdf = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var loadScript, test;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          loadScript = function loadScript(src) {
            return new Promise(function (resolve, reject) {
              if (document.querySelector("script[data-src=\"".concat(src, "\"]"))) {
                resolve();
                return;
              }
              var s = document.createElement("script");
              s.src = src;
              s.dataset.src = src;
              s.onload = function () {
                return resolve();
              };
              s.onerror = function () {
                return reject(new Error("Failed to load " + src));
              };
              document.head.appendChild(s);
            });
          };
          if (!(!window.jspdf || !window.jspdf.jsPDF)) {
            _context3.n = 1;
            break;
          }
          _context3.n = 1;
          return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
        case 1:
          test = new window.jspdf.jsPDF();
          if (!(typeof test.autoTable !== "function")) {
            _context3.n = 2;
            break;
          }
          _context3.n = 2;
          return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js");
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _ensureJsPdf.apply(this, arguments);
}
function generateDiaryPdf(_x, _x2, _x3) {
  return _generateDiaryPdf.apply(this, arguments);
}
/* ============================================================ */
function _generateDiaryPdf() {
  _generateDiaryPdf = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(week, weekRange, emotions) {
    var jsPDF, doc, pageWidth, margin, y, txt, maxW, lines, boxH, ty, rows, contentWidth, pageMaxY, today, endDate, endStr, filename, blob, file, url, a, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          jsPDF = window.jspdf.jsPDF;
          doc = new jsPDF({
            unit: "pt",
            format: "letter"
          });
          pageWidth = doc.internal.pageSize.getWidth();
          margin = 50;
          y = 45; // --- Title
          doc.setFont("helvetica", "bold");
          doc.setFontSize(18);
          doc.setTextColor(26, 26, 26);
          doc.text("DBT Weekly Diary Card", margin, y);
          y += 16;

          // --- Subtitle
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10.5);
          doc.setTextColor(85, 85, 85);
          doc.text("Taylor Abeel  |  ".concat(weekRange), margin, y);
          y += 18;

          // --- Target Behavior banner
          if (week.targetBehavior && week.targetBehavior.trim()) {
            txt = "Target Behavior:  ".concat(week.targetBehavior.trim());
            maxW = pageWidth - 2 * margin - 20;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            lines = doc.splitTextToSize(txt, maxW);
            boxH = Math.max(28, 14 + lines.length * 13);
            doc.setFillColor(243, 241, 236);
            doc.setDrawColor(207, 201, 189);
            doc.setLineWidth(0.5);
            doc.roundedRect(margin, y, pageWidth - 2 * margin, boxH, 2, 2, "FD");
            doc.setTextColor(26, 26, 26);
            ty = y + 17;
            lines.forEach(function (line, i) {
              doc.text(line, margin + 10, ty + i * 13);
            });
            y += boxH + 8;
          }

          // --- Daily Summary header
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(26, 26, 26);
          doc.text("Daily Summary", margin, y);
          y += 8;

          // --- Daily Summary table
          rows = DAYS.map(function (day, i) {
            var d = week.days[day] || {};
            var urge = d.targetUrge !== undefined && d.targetUrge !== "" ? String(d.targetUrge) : "0";
            var acted = d.targetDid || "—";
            var meditate = d.meditation || "—";
            var sleep = d.sleepHours ? "".concat(d.sleepHours, "h").concat(d.sleepQuality ? " (".concat(d.sleepQuality, ")") : "") : "—";
            var skills = d.skills !== "" && d.skills !== undefined && d.skills !== null ? "".concat(d.skills, "/7") : "—";
            var emParts = emotions.map(function (em) {
              var val = d.emotions ? d.emotions[em] : 0;
              return val && Number(val) > 0 ? "".concat(em, " ").concat(val) : null;
            }).filter(Boolean);
            var emStr = emParts.length > 0 ? emParts.join("  ·  ") : "none noted";
            return [DAYS[i], urge, acted, meditate, sleep, skills, emStr];
          });
          doc.autoTable({
            startY: y,
            head: [["Day", "Urge", "Acted", "Meditate", "Sleep", "Skills", "Emotions (intensity 1–5)"]],
            body: rows,
            styles: {
              font: "helvetica",
              fontSize: 9.5,
              cellPadding: 5,
              lineColor: [217, 212, 199],
              lineWidth: 0.4,
              textColor: [34, 34, 34],
              valign: "middle"
            },
            headStyles: {
              fillColor: [58, 58, 58],
              textColor: 255,
              fontStyle: "bold",
              halign: "center",
              cellPadding: 6
            },
            alternateRowStyles: {
              fillColor: [247, 246, 243]
            },
            columnStyles: {
              0: {
                cellWidth: 42
              },
              1: {
                cellWidth: 38,
                halign: "center"
              },
              2: {
                cellWidth: 42,
                halign: "center"
              },
              3: {
                cellWidth: 55,
                halign: "center"
              },
              4: {
                cellWidth: 75
              },
              5: {
                cellWidth: 42,
                halign: "center"
              },
              6: {
                cellWidth: "auto"
              }
            },
            margin: {
              left: margin,
              right: margin
            }
          });
          y = doc.lastAutoTable.finalY + 6;

          // --- Legend
          doc.setFont("helvetica", "italic");
          doc.setFontSize(8.5);
          doc.setTextColor(102, 102, 102);
          doc.text("Urge: 0 = none, 5 = strongest.  Acted: Y / N / — (n/a).  Skills: count of DBT skills used out of 7 tracked.", margin, y);
          y += 20;

          // --- Daily Journal section
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(26, 26, 26);
          doc.text("Daily Journal", margin, y);
          y += 14;
          contentWidth = pageWidth - 2 * margin;
          pageMaxY = doc.internal.pageSize.getHeight() - 50;
          DAYS.forEach(function (day, i) {
            var d = week.days[day] || {};
            var hasEntry = d.journal && d.journal.trim() || d.journalEmotion || d.skillUsed;
            if (!hasEntry) return;

            // page break check
            var linesEstimate = d.journal ? doc.splitTextToSize(d.journal.trim(), contentWidth).length : 0;
            var blockH = 14 + (d.journalEmotion ? 12 : 0) + (d.skillUsed ? 12 : 0) + linesEstimate * 13 + 8;
            if (y + blockH > pageMaxY) {
              doc.addPage();
              y = 45;
            }

            // Day name
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(26, 26, 26);
            doc.text(DAY_FULL[i], margin, y);
            y += 13;

            // Primary emotion
            if (d.journalEmotion) {
              var line = "Primary emotion: ".concat(d.journalEmotion);
              if (d.journalRating) {
                line += " (".concat(d.journalRating, "/5");
                if (d.afterRating && String(d.afterRating) !== String(d.journalRating)) {
                  line += " \u2192 ".concat(d.afterRating, "/5");
                }
                line += ")";
              }
              doc.setFont("helvetica", "italic");
              doc.setFontSize(9.5);
              doc.setTextColor(102, 102, 102);
              doc.text(line, margin, y);
              y += 12;
            }

            // Skill used
            if (d.skillUsed) {
              doc.setFont("helvetica", "italic");
              doc.setFontSize(9.5);
              doc.setTextColor(102, 102, 102);
              doc.text("Skill used: ".concat(d.skillUsed), margin, y);
              y += 12;
            }

            // Notes
            if (d.journal && d.journal.trim()) {
              doc.setFont("helvetica", "normal");
              doc.setFontSize(10.5);
              doc.setTextColor(34, 34, 34);
              var _lines = doc.splitTextToSize(d.journal.trim(), contentWidth);
              _lines.forEach(function (line) {
                if (y > pageMaxY) {
                  doc.addPage();
                  y = 45;
                }
                doc.text(line, margin, y);
                y += 13;
              });
            }
            y += 6;
          });

          // --- Footer
          if (y > pageMaxY - 20) {
            doc.addPage();
            y = 45;
          }
          y += 8;
          doc.setFont("helvetica", "italic");
          doc.setFontSize(8.5);
          doc.setTextColor(136, 136, 136);
          today = new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          });
          doc.text("Generated ".concat(today, "  \xB7  DBT Diary Card"), margin, y);

          // --- Save / Share
          endDate = parseLocalDate(week.weekStart);
          endDate.setDate(endDate.getDate() + 6);
          endStr = localDateStr(endDate);
          filename = "DBT_Diary_Card_".concat(week.weekStart, "_to_").concat(endStr, ".pdf");
          blob = doc.output("blob");
          file = new File([blob], filename, {
            type: "application/pdf"
          }); // Try Web Share API first — gives iOS users the native share sheet
          // (save to Files, send via Mail/Messages, AirDrop, etc.)
          if (!(navigator.canShare && navigator.canShare({
            files: [file]
          }))) {
            _context4.n = 4;
            break;
          }
          _context4.p = 1;
          _context4.n = 2;
          return navigator.share({
            files: [file],
            title: "DBT Diary Card"
          });
        case 2:
          return _context4.a(2);
        case 3:
          _context4.p = 3;
          _t2 = _context4.v;
          if (!(_t2.name === "AbortError")) {
            _context4.n = 4;
            break;
          }
          return _context4.a(2);
        case 4:
          // Fallback: classic download (works on desktop)
          url = URL.createObjectURL(blob);
          a = document.createElement("a");
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function () {
            return URL.revokeObjectURL(url);
          }, 1000);
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return _generateDiaryPdf.apply(this, arguments);
}
var emptyDay = function emptyDay() {
  var defaultEmotions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    targetUrge: "0",
    targetDid: "",
    meditation: "",
    emotions: Object.fromEntries(defaultEmotions.map(function (em) {
      return [em, "0"];
    })),
    sleepHours: "",
    sleepQuality: "",
    skills: "",
    journal: "",
    journalEmotion: "",
    journalRating: "",
    skillUsed: "",
    afterRating: ""
  };
};
function pad2(n) {
  return n < 10 ? "0" + n : "" + n;
}
function localDateStr(d) {
  return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
}
function parseLocalDate(s) {
  var _s$split$map = s.split("-").map(Number),
    _s$split$map2 = _slicedToArray(_s$split$map, 3),
    y = _s$split$map2[0],
    m = _s$split$map2[1],
    d = _s$split$map2[2];
  return new Date(y, m - 1, d);
}
function getThisWeekStart() {
  var now = new Date();
  var day = now.getDay();
  var diff = day === 0 ? -6 : 1 - day;
  var mon = new Date(now);
  mon.setDate(now.getDate() + diff);
  return localDateStr(mon);
}
var emptySkillsProgress = function emptySkillsProgress() {
  return {
    mindfulness: {
      capacity: "",
      confidence: ""
    },
    interpersonal: {
      capacity: "",
      confidence: ""
    },
    emotionReg: {
      capacity: "",
      confidence: ""
    },
    distressTol: {
      capacity: "",
      confidence: ""
    },
    mostConfident: "",
    wantToGrow: ""
  };
};
var emptyWeek = function emptyWeek() {
  var emotions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_EMOTIONS;
  var targetBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return {
    weekStart: getThisWeekStart(),
    targetBehavior: targetBehavior,
    trackedEmotions: emotions,
    customEmotionQuadrants: {},
    days: Object.fromEntries(DAYS.map(function (d) {
      return [d, emptyDay(emotions)];
    })),
    skillsProgress: emptySkillsProgress()
  };
};
var JSONBIN_KEY = "$2a$10$.5bg.QYWPmCuj8PWyj7tCeOJ/CgSv/MuJOfOp9.RXqwl/voySQIm2";
var JSONBIN_BIN = "6a2de372f5f4af5e29edc234";
function loadData() {
  return _loadData.apply(this, arguments);
}
function _loadData() {
  _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var r, j, d, s, _t3, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_BIN + "/latest", {
            headers: {
              "X-Master-Key": JSONBIN_KEY
            }
          });
        case 1:
          r = _context5.v;
          if (r.ok) {
            _context5.n = 2;
            break;
          }
          throw new Error("fetch failed");
        case 2:
          _context5.n = 3;
          return r.json();
        case 3:
          j = _context5.v;
          d = j.record;
          if (!(d && d.weeks && d.settings)) {
            _context5.n = 4;
            break;
          }
          return _context5.a(2, d);
        case 4:
          return _context5.a(2, null);
        case 5:
          _context5.p = 5;
          _t3 = _context5.v;
          _context5.p = 6;
          s = localStorage.getItem(STORAGE_KEY);
          return _context5.a(2, s ? JSON.parse(s) : null);
        case 7:
          _context5.p = 7;
          _t4 = _context5.v;
          return _context5.a(2, null);
      }
    }, _callee5, null, [[6, 7], [0, 5]]);
  }));
  return _loadData.apply(this, arguments);
}
function saveData(_x4) {
  return _saveData.apply(this, arguments);
}
function _saveData() {
  _saveData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(data) {
    var _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          } catch (_unused3) {}
          _context6.p = 1;
          _context6.n = 2;
          return fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_BIN, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key": JSONBIN_KEY
            },
            body: JSON.stringify(data)
          });
        case 2:
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          console.error("JSONBin save failed", _t5);
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[1, 3]]);
  }));
  return _saveData.apply(this, arguments);
}
function SliderInput(_ref) {
  var value = _ref.value,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 5 : _ref$max,
    _onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      letterSpacing: "0.07em",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: max,
    step: 1,
    value: value === "" ? 0 : Number(value),
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    style: {
      flex: 1,
      accentColor: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 26,
      textAlign: "center",
      fontFamily: "var(--mono)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--accent)"
    }
  }, value === "" ? "0" : value)));
}
function MultiToggle(_ref2) {
  var value = _ref2.value,
    options = _ref2.options,
    onChange = _ref2.onChange;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, options.map(function (opt) {
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      onClick: function onClick() {
        return onChange(value === opt ? "" : opt);
      },
      style: {
        padding: "5px 14px",
        borderRadius: 20,
        border: "1.5px solid ".concat(value === opt ? "var(--accent)" : "var(--border)"),
        background: value === opt ? "var(--accent)" : "transparent",
        color: value === opt ? "#fff" : "var(--muted)",
        fontWeight: 600,
        fontSize: 13,
        cursor: "pointer",
        transition: "all 0.15s",
        fontFamily: "var(--body)"
      }
    }, opt);
  }));
}
function Card(_ref3) {
  var children = _ref3.children,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? {} : _ref3$style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      background: "var(--card)",
      borderRadius: 16,
      padding: "18px 16px",
      border: "1px solid var(--border)"
    }, style)
  }, children);
}
function SectionLabel(_ref4) {
  var children = _ref4.children,
    color = _ref4.color;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      color: color || "var(--accent)",
      display: "block",
      marginBottom: 12
    }
  }, children);
}
function DayEntry(_ref5) {
  var dayFull = _ref5.dayFull,
    dayDate = _ref5.dayDate,
    data = _ref5.data,
    trackedEmotions = _ref5.trackedEmotions,
    targetBehavior = _ref5.targetBehavior,
    onChange = _ref5.onChange,
    onFlush = _ref5.onFlush,
    customEmotionQuadrants = _ref5.customEmotionQuadrants,
    onAddCustomEmotion = _ref5.onAddCustomEmotion;
  var set = function set(k, v) {
    return onChange(_objectSpread(_objectSpread({}, data), {}, _defineProperty({}, k, v)));
  };
  var setEmotion = function setEmotion(k, v) {
    return onChange(_objectSpread(_objectSpread({}, data), {}, {
      emotions: _objectSpread(_objectSpread({}, data.emotions), {}, _defineProperty({}, k, v))
    }));
  };
  var removeEmotion = function removeEmotion(k) {
    var next = _objectSpread({}, data.emotions);
    delete next[k];
    var patch = _objectSpread(_objectSpread({}, data), {}, {
      emotions: next
    });
    if (data.journalEmotion === k) patch.journalEmotion = "";
    onChange(patch);
  };
  var addEmotion = function addEmotion(k) {
    if (data.emotions[k] !== undefined) return;
    onChange(_objectSpread(_objectSpread({}, data), {}, {
      emotions: _objectSpread(_objectSpread({}, data.emotions), {}, _defineProperty({}, k, "0"))
    }));
  };
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    openQuadrant = _useState2[0],
    setOpenQuadrant = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showCustomInput = _useState4[0],
    setShowCustomInput = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    customName = _useState6[0],
    setCustomName = _useState6[1];
  var _useState7 = useState("blue"),
    _useState8 = _slicedToArray(_useState7, 2),
    customQuadrant = _useState8[0],
    setCustomQuadrant = _useState8[1];
  var submitCustom = function submitCustom() {
    var name = customName.trim();
    if (!name) return;
    if (data.emotions[name] === undefined) {
      onAddCustomEmotion && onAddCustomEmotion(name, customQuadrant);
      addEmotion(name);
    }
    setCustomName("");
    setShowCustomInput(false);
  };
  var autoPrimary = function () {
    var best = null,
      bestVal = 0;
    for (var _i2 = 0, _Object$entries2 = Object.entries(data.emotions || {}); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        em = _Object$entries2$_i[0],
        val = _Object$entries2$_i[1];
      var n = Number(val) || 0;
      if (n > bestVal) {
        best = em;
        bestVal = n;
      }
    }
    return best;
  }();
  var loggedEmotions = Object.keys(data.emotions || {});
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 26,
      color: "var(--fg)",
      fontStyle: "italic"
    }
  }, dayFull), dayDate && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      fontFamily: "var(--mono)"
    }
  }, dayDate)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Target Behavior"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 8,
      padding: "8px 10px",
      marginBottom: 14,
      fontSize: 11,
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-soft)"
    }
  }, "Urge"), " = 0\u20135 (how strong was the urge?) \xA0\xB7\xA0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-soft)"
    }
  }, "Did it?"), " = Y / N \xA0\xB7\xA0 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-soft)"
    }
  }, "Meditation"), " = mindful meditation today? Y / N"), targetBehavior && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 10,
      padding: "10px 12px",
      marginBottom: 16,
      fontSize: 13,
      color: "var(--fg-soft)",
      fontStyle: "italic",
      lineHeight: 1.5
    }
  }, targetBehavior), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SliderInput, {
    label: "Urge Strength (0\u20135)",
    value: data.targetUrge,
    max: 5,
    onChange: function onChange(v) {
      return set("targetUrge", v);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 7
    }
  }, "Did it?"), /*#__PURE__*/React.createElement(MultiToggle, {
    value: data.targetDid,
    options: ["Y", "N"],
    onChange: function onChange(v) {
      return set("targetDid", v);
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 7
    }
  }, "Mindful meditation?"), /*#__PURE__*/React.createElement(MultiToggle, {
    value: data.meditation,
    options: ["Y", "N"],
    onChange: function onChange(v) {
      return set("meditation", v);
    }
  }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Emotions (0\u20135)"), loggedEmotions.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      fontStyle: "italic",
      marginBottom: 10
    }
  }, "No emotions logged yet. Use the picker below."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, loggedEmotions.map(function (em) {
    var qKey = EMOTION_TO_QUADRANT[em] || customEmotionQuadrants && customEmotionQuadrants[em] || null;
    var qColor = qKey ? MOOD_METER[qKey].color : "#7a9e87";
    return /*#__PURE__*/React.createElement("div", {
      key: em,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--fg)",
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: qColor,
        display: "inline-block"
      }
    }), em), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeEmotion(em);
      },
      "aria-label": "Remove " + em,
      style: {
        background: "transparent",
        border: "none",
        color: "var(--muted)",
        fontSize: 18,
        cursor: "pointer",
        padding: "2px 8px",
        lineHeight: 1
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: 0,
      max: 5,
      step: 1,
      value: data.emotions[em] === "" ? 0 : Number(data.emotions[em]),
      onChange: function onChange(e) {
        return setEmotion(em, e.target.value);
      },
      style: {
        flex: 1,
        accentColor: qColor
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 26,
        textAlign: "center",
        fontFamily: "var(--mono)",
        fontSize: 16,
        fontWeight: 700,
        color: qColor
      }
    }, data.emotions[em] || "0")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: loggedEmotions.length > 0 ? 16 : 4,
      paddingTop: 14,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 10
    }
  }, "Add an emotion"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: openQuadrant ? 14 : 0
    }
  }, Object.entries(MOOD_METER).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      key = _ref7[0],
      q = _ref7[1];
    var active = openQuadrant === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: function onClick() {
        setOpenQuadrant(active ? null : key);
        setShowCustomInput(false);
      },
      style: {
        padding: "10px 8px",
        borderRadius: 12,
        border: "2px solid " + (active ? q.color : "transparent"),
        background: q.bg,
        cursor: "pointer",
        textAlign: "center",
        fontFamily: "var(--body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: q.color,
        lineHeight: 1.3
      }
    }, q.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: q.color,
        opacity: 0.85,
        marginTop: 2
      }
    }, q.sublabel));
  })), openQuadrant && /*#__PURE__*/React.createElement("div", {
    style: {
      background: MOOD_METER[openQuadrant].bg + "60",
      borderRadius: 12,
      padding: "10px 10px 4px",
      border: "1px solid " + MOOD_METER[openQuadrant].color + "30"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowCustomInput(true);
      setCustomQuadrant(openQuadrant);
    },
    style: {
      padding: "6px 10px",
      borderRadius: 16,
      fontSize: 12,
      fontWeight: 600,
      border: "1.5px dashed " + MOOD_METER[openQuadrant].color,
      background: "transparent",
      color: MOOD_METER[openQuadrant].color,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, "+ Custom"), MOOD_METER[openQuadrant].emotions.map(function (em) {
    var already = data.emotions[em] !== undefined;
    return /*#__PURE__*/React.createElement("button", {
      key: em,
      onClick: function onClick() {
        return addEmotion(em);
      },
      disabled: already,
      style: {
        padding: "6px 12px",
        borderRadius: 16,
        fontSize: 12,
        fontWeight: 600,
        border: "1.5px solid " + (already ? "transparent" : MOOD_METER[openQuadrant].color + "70"),
        background: already ? MOOD_METER[openQuadrant].color + "30" : "#fff",
        color: already ? MOOD_METER[openQuadrant].color : "var(--fg)",
        cursor: already ? "default" : "pointer",
        opacity: already ? 0.6 : 1,
        fontFamily: "var(--body)"
      }
    }, em, already ? " ✓" : "");
  }), customEmotionQuadrants && Object.entries(customEmotionQuadrants).filter(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      n = _ref9[0],
      q = _ref9[1];
    return q === openQuadrant;
  }).map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 1),
      n = _ref1[0];
    var already = data.emotions[n] !== undefined;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: function onClick() {
        return addEmotion(n);
      },
      disabled: already,
      style: {
        padding: "6px 12px",
        borderRadius: 16,
        fontSize: 12,
        fontWeight: 600,
        border: "1.5px solid " + (already ? "transparent" : MOOD_METER[openQuadrant].color + "70"),
        background: already ? MOOD_METER[openQuadrant].color + "30" : "#fff",
        color: already ? MOOD_METER[openQuadrant].color : "var(--fg)",
        fontStyle: "italic",
        cursor: already ? "default" : "pointer",
        opacity: already ? 0.6 : 1,
        fontFamily: "var(--body)"
      }
    }, n, already ? " ✓" : "");
  }))), showCustomInput && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "12px",
      borderRadius: 12,
      background: "var(--surface)",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 8
    }
  }, "Custom emotion name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: customName,
    onChange: function onChange(e) {
      return setCustomName(e.target.value);
    },
    placeholder: "e.g. Misunderstood",
    style: {
      width: "100%",
      background: "#fff",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: "var(--fg)",
      fontSize: 14,
      boxSizing: "border-box",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 8
    }
  }, "Quadrant"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 10
    }
  }, Object.entries(MOOD_METER).map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
      key = _ref11[0],
      q = _ref11[1];
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: function onClick() {
        return setCustomQuadrant(key);
      },
      style: {
        padding: "6px 4px",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 600,
        border: "1.5px solid " + (customQuadrant === key ? q.color : "var(--border)"),
        background: customQuadrant === key ? q.bg : "transparent",
        color: q.color,
        cursor: "pointer",
        fontFamily: "var(--body)"
      }
    }, q.label, " / ", q.sublabel);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setShowCustomInput(false);
      setCustomName("");
    },
    style: {
      flex: 1,
      padding: "10px",
      borderRadius: 8,
      background: "transparent",
      border: "1.5px solid var(--border)",
      color: "var(--muted)",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: submitCustom,
    disabled: !customName.trim(),
    style: {
      flex: 2,
      padding: "10px",
      borderRadius: 8,
      background: customName.trim() ? "var(--accent)" : "var(--border)",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      cursor: customName.trim() ? "pointer" : "default",
      fontFamily: "var(--body)"
    }
  }, "Add"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "#b08a6e"
  }, "Sleep"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Hours"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 0,
    max: 24,
    step: 0.5,
    placeholder: "7.5",
    value: data.sleepHours,
    onChange: function onChange(e) {
      return set("sleepHours", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: "var(--fg)",
      fontSize: 15,
      fontFamily: "var(--mono)",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Quality"), /*#__PURE__*/React.createElement("select", {
    value: data.sleepQuality,
    onChange: function onChange(e) {
      return set("sleepQuality", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: data.sleepQuality ? "var(--fg)" : "var(--muted)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), ["Poor", "Fair", "Good", "Great"].map(function (q) {
    return /*#__PURE__*/React.createElement("option", {
      key: q,
      value: q
    }, q);
  }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "#8a7eb0"
  }, "Skills Used (0\u20137)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SliderInput, {
    value: data.skills,
    max: 7,
    onChange: function onChange(v) {
      return set("skills", v);
    }
  }), data.skills !== "" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      fontStyle: "italic"
    }
  }, SKILLS_SCALE[Number(data.skills)]))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "#c8a84b"
  }, "Daily Journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Primary emotion today ", autoPrimary && !data.journalEmotion && /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      fontStyle: "italic",
      letterSpacing: 0,
      fontWeight: 400,
      opacity: 0.85
    }
  }, "\u2014 auto: ", autoPrimary)), /*#__PURE__*/React.createElement("select", {
    value: data.journalEmotion,
    onChange: function onChange(e) {
      return set("journalEmotion", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "10px 12px",
      color: data.journalEmotion ? "var(--fg)" : "var(--muted)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, autoPrimary ? "Auto: " + autoPrimary : "Select an emotion…"), loggedEmotions.length > 0 && /*#__PURE__*/React.createElement("optgroup", {
    label: "Logged today"
  }, loggedEmotions.map(function (em) {
    return /*#__PURE__*/React.createElement("option", {
      key: em,
      value: em
    }, em);
  })), /*#__PURE__*/React.createElement("optgroup", {
    label: "All emotions"
  }, ALL_EMOTIONS.filter(function (e) {
    return !loggedEmotions.includes(e);
  }).map(function (em) {
    return /*#__PURE__*/React.createElement("option", {
      key: em,
      value: em
    }, em);
  })))), /*#__PURE__*/React.createElement(SliderInput, {
    label: "Before Rating (0\u20135)",
    value: data.journalRating,
    max: 5,
    onChange: function onChange(v) {
      return set("journalRating", v);
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Skill I used"), /*#__PURE__*/React.createElement("select", {
    value: data.skillUsed,
    onChange: function onChange(e) {
      return set("skillUsed", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "10px 12px",
      color: data.skillUsed ? "var(--fg)" : "var(--muted)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select a skill\u2026"), ALL_SKILLS_LIST.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement(SliderInput, {
    label: "After Rating (0\u20135)",
    value: data.afterRating,
    max: 5,
    onChange: function onChange(v) {
      return set("afterRating", v);
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Notes ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      fontStyle: "italic",
      letterSpacing: 0,
      fontWeight: 400,
      opacity: 0.85
    }
  }, "\u2014 thoughts, emotions, behaviors, body and environment")), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "What happened? What did you notice? What did you feel?",
    value: data.journal,
    onChange: function onChange(e) {
      return set("journal", e.target.value);
    },
    onBlur: onFlush,
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: "var(--fg)",
      fontSize: 14,
      resize: "vertical",
      fontFamily: "inherit",
      boxSizing: "border-box"
    }
  })))));
}
var EMOTION_QUADRANTS = [{
  id: "highUnpleasant",
  label: "High Energy\nUnpleasant",
  color: "#c0513a",
  textColor: "#fff",
  bg: "#f5e8e6",
  desc: "Activated and difficult",
  emotions: ["Anger", "Fear", "Anxious", "Overwhelmed", "Shame", "Pain", "Contempt", "Frustrated"]
}, {
  id: "highPleasant",
  label: "High Energy\nPleasant",
  color: "#b8922a",
  textColor: "#fff",
  bg: "#faf3e0",
  desc: "Activated and good",
  emotions: ["Joy", "Pride", "Hopeful"]
}, {
  id: "lowUnpleasant",
  label: "Low Energy\nUnpleasant",
  color: "#4a7aaa",
  textColor: "#fff",
  bg: "#e8eef5",
  desc: "Heavy and difficult",
  emotions: ["Sad", "Lonely", "Numb", "Ambivalent"]
}, {
  id: "lowPleasant",
  label: "Low Energy\nPleasant",
  color: "#4a8a5e",
  textColor: "#fff",
  bg: "#e6f0eb",
  desc: "Calm and good",
  emotions: ["Grateful", "Hopeful"]
}];
var EMOTION_DEFINITIONS = {
  "Pain": {
    def: "Deep emotional or physical hurt — an aching feeling from loss, rejection, or distress.",
    body: "Heavy chest, a sense of something being wounded, tearfulness or a desire to curl inward.",
    dbt: "Pain often signals that something important to you has been damaged or lost. It deserves acknowledgment, not avoidance."
  },
  "Sad": {
    def: "A heavy, low feeling connected to loss, disappointment, or missing someone or something.",
    body: "Low energy, slowness, heaviness, quietness, wanting to withdraw.",
    dbt: "Sadness is a natural response to loss. Opposite Action: gently get active — move your body, reach out, do one small thing."
  },
  "Shame": {
    def: "Feeling fundamentally flawed or bad as a person — not just that you did something wrong, but that you are wrong.",
    body: "Wanting to hide or disappear, heat in the face, shrinking, avoiding eye contact, shutting down.",
    dbt: "Shame thrives in silence. It tells you that you are the problem, not the behavior. Check the Facts — is shame fitting the actual situation?"
  },
  "Anger": {
    def: "A hot, activated feeling when something feels wrong, unfair, threatening, or blocked.",
    body: "Tension in jaw or fists, heat, urgency, wanting to push back, raised voice.",
    dbt: "Anger signals that a boundary or value has been crossed. Opposite Action: avoid the situation temporarily, and practice being gentle."
  },
  "Fear": {
    def: "An alarm response to perceived danger or uncertainty — the body preparing to protect you.",
    body: "Racing heart, shallow breathing, scanning for danger, urge to flee, freeze, or fight.",
    dbt: "Fear tells you there is danger — real or perceived. Opposite Action: approach the feared thing gently and in small steps."
  },
  "Joy": {
    def: "A light, expansive feeling of pleasure, delight, or happiness — something good is happening right now.",
    body: "Lightness in the chest, smiling, energy, wanting to share or celebrate.",
    dbt: "Joy is worth savoring. Mindfully participate in it fully — don't second-guess it or wait for it to end."
  },
  "Overwhelmed": {
    def: "Too much to process or handle — flooded, unable to cope, stretched past your limit.",
    body: "Mental fog, inability to prioritize, paralysis, feeling like everything is pressing in at once.",
    dbt: "Overwhelm often calls for TIPP — bring your body's intensity down first, then address what's in front of you One Thing at a Time."
  },
  "Lonely": {
    def: "Feeling disconnected, unseen, or isolated — wanting real connection that feels absent.",
    body: "Emptiness, longing, a sense of being on the outside, craving contact or recognition.",
    dbt: "Loneliness is a signal to reach out, even when it feels pointless. Contribution — helping someone else — can shift it too."
  },
  "Hopeful": {
    def: "A gentle forward-leaning feeling that things might improve — possibility without certainty.",
    body: "Slight lightness, openness to the future, a quiet motivation to try.",
    dbt: "Hope is worth protecting. Build on it with small actions. Let it coexist with uncertainty — it doesn't need proof to be real."
  },
  "Ambivalent": {
    def: "Pulled in two directions at once — genuinely conflicted, or genuinely unsure what you feel.",
    body: "Going back and forth, difficulty deciding, a flatness or fog, not knowing what you want.",
    dbt: "Ambivalence often means two valid needs are in conflict. Check the Facts on both sides. Wise Mind can help you find what your deepest self actually knows."
  },
  "Pride": {
    def: "A warm sense of satisfaction in yourself, your effort, or your identity.",
    body: "Upright posture, warmth in the chest, a quiet sense of having done something worthwhile.",
    dbt: "Pride reinforces values-aligned behavior. Let yourself feel it — it's not arrogance. Build Mastery is the skill that grows this."
  },
  "Anxious": {
    def: "Worried and on edge about something that might happen — tight, anticipatory discomfort.",
    body: "Restlessness, tightness, racing thoughts, difficulty being present, checking behaviors.",
    dbt: "Anxiety often overestimates threat. Check the Facts: does the worry fit the actual situation? Paced Breathing directly calms the nervous system."
  },
  "Contempt": {
    def: "A cold, dismissive feeling toward someone perceived as inferior, worthless, or disgusting.",
    body: "An internal pulling-away, a sense of looking down, disgust mixed with distance.",
    dbt: "Contempt in relationships is corrosive. GIVE — staying Interested and Validating — is the antidote, even when it's hard."
  },
  "Numb": {
    def: "An absence of feeling — emotionally flat or disconnected, as if your feelings are behind glass.",
    body: "Emptiness, going through the motions, not caring, disconnection from your own experience.",
    dbt: "Numbness is often the nervous system's protection from overwhelm. It is itself an emotional state. Gently Observe and Describe what you notice without pushing."
  },
  "Grateful": {
    def: "A warm recognition of something good — appreciation for what or who is present in your life.",
    body: "Warmth, softness, a sense of being cared for, wanting to give back or acknowledge.",
    dbt: "Gratitude is a positive emotion worth actively building. Increase Positive Events — notice and name good things as they happen."
  },
  "Frustrated": {
    def: "The tension of being blocked — wanting something that isn't happening, efforts not working.",
    body: "Tightness, impatience, wanting to push harder or give up entirely, sighing, edge in voice.",
    dbt: "Frustration is blocked Anger. Identify what you actually want. Then ask: Is what I'm doing helping me get there? If not, try Effectively."
  }
};
function FeelingsWheel() {
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedQuadrant = _useState0[0],
    setSelectedQuadrant = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedEmotion = _useState10[0],
    setSelectedEmotion = _useState10[1];
  var selectQuadrant = function selectQuadrant(q) {
    if ((selectedQuadrant === null || selectedQuadrant === void 0 ? void 0 : selectedQuadrant.id) === q.id) {
      setSelectedQuadrant(null);
      setSelectedEmotion(null);
    } else {
      setSelectedQuadrant(q);
      setSelectedEmotion(null);
    }
  };
  var selectEmotion = function selectEmotion(em) {
    setSelectedEmotion(selectedEmotion === em ? null : em);
  };
  var def = selectedEmotion ? EMOTION_DEFINITIONS[selectedEmotion] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 20,
      color: "var(--fg)",
      fontStyle: "italic",
      marginBottom: 4
    }
  }, "What Am I Feeling?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.5
    }
  }, "Start by choosing your energy level and whether it feels pleasant or unpleasant right now.")), selectedEmotion && def && /*#__PURE__*/React.createElement("div", {
    style: {
      background: selectedQuadrant.color,
      borderRadius: 14,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.75)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 4
    }
  }, "You might be feeling"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontFamily: "var(--display)",
      fontStyle: "italic",
      color: "#fff",
      marginBottom: 10
    }
  }, selectedEmotion), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.95)",
      lineHeight: 1.6,
      marginBottom: 10
    }
  }, def.def), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.3)",
      paddingTop: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "rgba(255,255,255,0.7)",
      marginBottom: 4
    }
  }, "Body signals"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.9)",
      lineHeight: 1.5
    }
  }, def.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.3)",
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "rgba(255,255,255,0.7)",
      marginBottom: 4
    }
  }, "DBT note"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.9)",
      lineHeight: 1.5
    }
  }, def.dbt))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, EMOTION_QUADRANTS.map(function (q) {
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      onClick: function onClick() {
        return selectQuadrant(q);
      },
      style: {
        padding: "18px 12px",
        borderRadius: 14,
        border: "2px solid ".concat((selectedQuadrant === null || selectedQuadrant === void 0 ? void 0 : selectedQuadrant.id) === q.id ? q.color : "transparent"),
        background: q.bg,
        cursor: "pointer",
        textAlign: "center",
        transition: "all 0.15s",
        fontFamily: "var(--body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: q.color,
        lineHeight: 1.4,
        whiteSpace: "pre-line",
        marginBottom: 4
      }
    }, q.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)"
      }
    }, q.desc));
  })), selectedQuadrant && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderColor: selectedQuadrant.color + "50"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: selectedQuadrant.color
  }, "Select what fits \u2014 tap to see definition"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, selectedQuadrant.emotions.map(function (em) {
    var isSelected = selectedEmotion === em;
    return /*#__PURE__*/React.createElement("button", {
      key: em,
      onClick: function onClick() {
        return selectEmotion(em);
      },
      style: {
        padding: "12px 14px",
        borderRadius: 12,
        textAlign: "left",
        cursor: "pointer",
        border: "1.5px solid ".concat(isSelected ? selectedQuadrant.color : "var(--border)"),
        background: isSelected ? selectedQuadrant.bg : "var(--surface)",
        transition: "all 0.15s",
        fontFamily: "var(--body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: isSelected ? 700 : 500,
        color: isSelected ? selectedQuadrant.color : "var(--fg)"
      }
    }, em), isSelected && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: selectedQuadrant.color,
        fontWeight: 700
      }
    }, "\u2713 Selected"), !isSelected && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--muted)"
      }
    }, "+")), isSelected && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: selectedQuadrant.color,
        marginTop: 3,
        opacity: 0.8
      }
    }, "See definition above \u2191"));
  }))), !selectedQuadrant && !selectedEmotion && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 12,
      padding: "20px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, "Tap one of the four zones above to see the emotions that fit that state, with definitions and body signals to help you identify what you're feeling.")));
}
function SkillsReference() {
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    open = _useState12[0],
    setOpen = _useState12[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, SKILLS_REFERENCE.map(function (module, mi) {
    return /*#__PURE__*/React.createElement("div", {
      key: mi
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--display)",
        fontSize: 19,
        color: "var(--fg)",
        marginBottom: 10,
        fontStyle: "italic"
      }
    }, module.module), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, module.skills.map(function (skill, si) {
      var key = "".concat(mi, "-").concat(si);
      var isOpen = open === key;
      return /*#__PURE__*/React.createElement("button", {
        key: si,
        onClick: function onClick() {
          return setOpen(isOpen ? null : key);
        },
        style: {
          background: "var(--card)",
          border: "1px solid ".concat(isOpen ? module.color : "var(--border)"),
          borderRadius: 12,
          padding: "12px 14px",
          textAlign: "left",
          cursor: "pointer",
          width: "100%"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          fontWeight: 600,
          color: "var(--fg)",
          display: "block"
        }
      }, skill.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--muted)"
        }
      }, skill.category)), /*#__PURE__*/React.createElement("span", {
        style: {
          color: module.color,
          fontSize: 18,
          marginLeft: 10
        }
      }, isOpen ? "−" : "+")), isOpen && /*#__PURE__*/React.createElement("p", {
        style: {
          marginTop: 10,
          fontSize: 13,
          color: "var(--fg-soft)",
          lineHeight: 1.65,
          borderTop: "1px solid var(--border)",
          paddingTop: 10
        }
      }, skill.desc));
    })));
  }));
}
function Settings(_ref12) {
  var settings = _ref12.settings,
    onSave = _ref12.onSave,
    onExport = _ref12.onExport,
    onImport = _ref12.onImport;
  var _useState13 = useState(_toConsumableArray(settings.trackedEmotions)),
    _useState14 = _slicedToArray(_useState13, 2),
    emotions = _useState14[0],
    setEmotions = _useState14[1];
  var _useState15 = useState(settings.targetBehavior || ""),
    _useState16 = _slicedToArray(_useState15, 2),
    target = _useState16[0],
    setTarget = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    saved = _useState18[0],
    setSaved = _useState18[1];
  var _useState19 = useState(""),
    _useState20 = _slicedToArray(_useState19, 2),
    importText = _useState20[0],
    setImportText = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showImport = _useState22[0],
    setShowImport = _useState22[1];
  var toggle = function toggle(em) {
    if (emotions.includes(em)) setEmotions(emotions.filter(function (e) {
      return e !== em;
    }));else setEmotions([].concat(_toConsumableArray(emotions), [em]));
  };
  var handleSave = function handleSave() {
    onSave({
      trackedEmotions: emotions,
      targetBehavior: target
    });
    setSaved(true);
    setTimeout(function () {
      return setSaved(false);
    }, 2000);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Target Behavior"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 8,
      padding: "10px 12px",
      marginBottom: 12,
      fontSize: 12,
      color: "var(--fg-soft)",
      lineHeight: 1.65,
      fontStyle: "italic"
    }
  }, "A specific behavior you are working to reduce or stop \u2014 something that gets in the way of the life you want."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      display: "block",
      marginBottom: 10
    }
  }, "The behavior you and your therapist are tracking this week."), /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    placeholder: "Describe your target behavior\u2026",
    value: target,
    onChange: function onChange(e) {
      return setTarget(e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: "var(--fg)",
      fontSize: 14,
      resize: "none",
      fontFamily: "inherit",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Default Emotions"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      display: "block",
      marginBottom: 12,
      lineHeight: 1.5
    }
  }, "These emotions are pre-loaded each day so you can rate them quickly. You can still add or remove emotions per day. No minimum."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, Object.entries(MOOD_METER).map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      key = _ref14[0],
      q = _ref14[1];
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: q.color,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        marginBottom: 6
      }
    }, q.label, " \xB7 ", q.sublabel), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, q.emotions.map(function (em) {
      var on = emotions.includes(em);
      return /*#__PURE__*/React.createElement("button", {
        key: em,
        onClick: function onClick() {
          return toggle(em);
        },
        style: {
          padding: "5px 11px",
          borderRadius: 16,
          fontSize: 12,
          fontWeight: 600,
          border: "1.5px solid " + (on ? q.color : q.color + "40"),
          background: on ? q.color : "#fff",
          color: on ? "#fff" : q.color,
          cursor: "pointer",
          fontFamily: "var(--body)"
        }
      }, em);
    })));
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      display: "block",
      marginTop: 14
    }
  }, emotions.length, " selected")), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      padding: "14px",
      borderRadius: 12,
      background: "var(--accent)",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, saved ? "Saved ✓" : "Save Settings"), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "var(--muted)"
  }, "Data"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onExport,
    style: {
      padding: "12px",
      borderRadius: 10,
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      color: "var(--fg-soft)",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, "\uD83D\uDCE4 Export All Data"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowImport(!showImport);
    },
    style: {
      padding: "12px",
      borderRadius: 10,
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      color: "var(--fg-soft)",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, "\uD83D\uDCE5 Import Data"), showImport && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      lineHeight: 1.5
    }
  }, "Paste your exported data below then tap Import."), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "Paste exported data here\u2026",
    value: importText,
    onChange: function onChange(e) {
      return setImportText(e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "8px 10px",
      color: "var(--fg)",
      fontSize: 13,
      resize: "none",
      fontFamily: "inherit",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      onImport(importText);
      setImportText("");
      setShowImport(false);
    },
    style: {
      padding: "12px",
      borderRadius: 10,
      background: "#c0513a",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "var(--body)"
    }
  }, "Import \u2014 This will replace all current data")))));
}
var SKILLS_PROGRESS_MODULES = [{
  key: "mindfulness",
  icon: "🧘",
  label: "Core Mindfulness",
  mastery: "I notice my thoughts and feelings without reacting. I stay present. I access Wise Mind regularly and trust it."
}, {
  key: "interpersonal",
  icon: "🤝",
  label: "Interpersonal Effectiveness",
  mastery: "I ask for what I need clearly. I keep my self-respect in hard conversations. I maintain relationships I value."
}, {
  key: "emotionReg",
  icon: "💛",
  label: "Emotion Regulation",
  mastery: "I understand my emotions. I use PLEASE skills daily. I act opposite to unhelpful urges. I don't suppress or amplify."
}, {
  key: "distressTol",
  icon: "🛡️",
  label: "Distress Tolerance",
  mastery: "I survive crises without making things worse. I reach for a skill before acting impulsively. I practice radical acceptance."
}];
var CAPACITY_LABELS = ["", "Don't know it yet", "Learned but struggle to use", "Can use with effort", "Use it consistently", "Feels natural and automatic"];
var CONFIDENCE_LABELS = ["", "Not confident at all", "A little confident", "Somewhat confident", "Mostly confident", "Fully confident it helps me"];
function SkillsProgress(_ref15) {
  var progress = _ref15.progress,
    onChange = _ref15.onChange;
  var sp = progress || {};
  var set = function set(key, field, val) {
    return onChange(_objectSpread(_objectSpread({}, sp), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, sp[key] || {}), {}, _defineProperty({}, field, val)))));
  };
  var setField = function setField(field, val) {
    return onChange(_objectSpread(_objectSpread({}, sp), {}, _defineProperty({}, field, val)));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 20,
      color: "var(--fg)",
      fontStyle: "italic",
      marginBottom: 4
    }
  }, "Skills Progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.5
    }
  }, "Rate where you actually are \u2014 not where you think you should be. Update weekly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 10,
      padding: "10px 12px",
      fontSize: 11,
      color: "var(--muted)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-soft)"
    }
  }, "Capacity:"), " 1 = don't know it \xB7 2 = learned, struggle \xB7 3 = use with effort \xB7 4 = use consistently \xB7 5 = automatic", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg-soft)"
    }
  }, "Confidence:"), " 1 = not at all \xB7 2 = a little \xB7 3 = somewhat \xB7 4 = mostly \xB7 5 = fully confident"), SKILLS_PROGRESS_MODULES.map(function (mod) {
    var vals = sp[mod.key] || {};
    return /*#__PURE__*/React.createElement(Card, {
      key: mod.key
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, mod.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--display)",
        fontSize: 16,
        fontStyle: "italic",
        color: "var(--fg)"
      }
    }, mod.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted)",
        fontStyle: "italic",
        lineHeight: 1.5,
        marginBottom: 14,
        paddingBottom: 14,
        borderBottom: "1px solid var(--border)"
      }
    }, mod.mastery), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SliderInput, {
      label: "Capacity (1\u20135)",
      value: vals.capacity || "",
      max: 5,
      onChange: function onChange(v) {
        return set(mod.key, "capacity", v);
      }
    }), vals.capacity && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)",
        marginTop: 4,
        fontStyle: "italic"
      }
    }, CAPACITY_LABELS[Number(vals.capacity)])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SliderInput, {
      label: "Confidence (1\u20135)",
      value: vals.confidence || "",
      max: 5,
      onChange: function onChange(v) {
        return set(mod.key, "confidence", v);
      }
    }), vals.confidence && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)",
        marginTop: 4,
        fontStyle: "italic"
      }
    }, CONFIDENCE_LABELS[Number(vals.confidence)]))));
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Weekly Reflection"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Which module do you feel most confident in?"), /*#__PURE__*/React.createElement("select", {
    value: sp.mostConfident || "",
    onChange: function onChange(e) {
      return setField("mostConfident", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "10px 12px",
      color: sp.mostConfident ? "var(--fg)" : "var(--muted)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), SKILLS_PROGRESS_MODULES.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.key,
      value: m.label
    }, m.icon, " ", m.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      display: "block",
      marginBottom: 6
    }
  }, "Where do you most want to grow?"), /*#__PURE__*/React.createElement("select", {
    value: sp.wantToGrow || "",
    onChange: function onChange(e) {
      return setField("wantToGrow", e.target.value);
    },
    style: {
      width: "100%",
      background: "var(--surface)",
      border: "1.5px solid var(--border)",
      borderRadius: 8,
      padding: "10px 12px",
      color: sp.wantToGrow ? "var(--fg)" : "var(--muted)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), SKILLS_PROGRESS_MODULES.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.key,
      value: m.label
    }, m.icon, " ", m.label);
  }))))));
}
function TrendsDashboard(_ref16) {
  var weeks = _ref16.weeks;
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    activeEmotion = _useState24[0],
    setActiveEmotion = _useState24[1];
  var _useState25 = useState("week"),
    _useState26 = _slicedToArray(_useState25, 2),
    timeRange = _useState26[0],
    setTimeRange = _useState26[1]; // 'week' | 'month' | 'all'

  if (!weeks.length) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--display)",
        fontSize: 20,
        color: "var(--fg)",
        fontStyle: "italic"
      }
    }, "Trends"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        borderRadius: 14,
        padding: "28px 20px",
        textAlign: "center",
        border: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        marginBottom: 12
      }
    }, "\uD83D\uDCC8"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--fg)",
        fontWeight: 600,
        marginBottom: 6
      }
    }, "No data yet"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--muted)",
        lineHeight: 1.6
      }
    }, "Start logging to see trends.")));
  }

  // Build aggregated custom-quadrant map across all weeks
  var customQuadrantsMerged = function () {
    var all = {};
    var _iterator2 = _createForOfIteratorHelper(weeks),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var w = _step2.value;
        if (w.customEmotionQuadrants) Object.assign(all, w.customEmotionQuadrants);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return all;
  }();

  // Filter weeks for the quadrant breakdown
  var filteredWeeks = timeRange === "all" ? weeks : timeRange === "month" ? weeks.slice(-4) : weeks.slice(-1);

  // Count check-ins per quadrant (any emotion rated > 0 = 1 check-in)
  var quadrantCounts = {
    red: 0,
    yellow: 0,
    blue: 0,
    green: 0,
    other: 0
  };
  var totalCheckins = 0;
  var _iterator3 = _createForOfIteratorHelper(filteredWeeks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var w = _step3.value;
      var _iterator4 = _createForOfIteratorHelper(DAYS),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _w$days$d7;
          var d = _step4.value;
          var ems = ((_w$days$d7 = w.days[d]) === null || _w$days$d7 === void 0 ? void 0 : _w$days$d7.emotions) || {};
          for (var _i3 = 0, _Object$entries3 = Object.entries(ems); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              em = _Object$entries3$_i[0],
              val = _Object$entries3$_i[1];
            if (Number(val) > 0) {
              var q = EMOTION_TO_QUADRANT[em] || customQuadrantsMerged[em] || "other";
              quadrantCounts[q] = (quadrantCounts[q] || 0) + 1;
              totalCheckins++;
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var emotions = weeks[weeks.length - 1].trackedEmotions || DEFAULT_EMOTIONS;
  var EMOTION_COLORS = ["#c0513a", "#6b9fd4", "#9b7fca", "#e8b84b", "#6dab7e", "#b08a6e", "#8a7eb0", "#d9604a"];
  var chartData = weeks.map(function (w) {
    var row = {
      week: w.weekStart.slice(5)
    };
    emotions.forEach(function (em) {
      var vals = DAYS.map(function (d) {
        var _w$days$d;
        return Number(((_w$days$d = w.days[d]) === null || _w$days$d === void 0 || (_w$days$d = _w$days$d.emotions) === null || _w$days$d === void 0 ? void 0 : _w$days$d[em]) || 0);
      });
      row[em] = parseFloat((vals.reduce(function (a, b) {
        return a + b;
      }, 0) / 7).toFixed(1));
    });
    var sleepVals = DAYS.map(function (d) {
      var _w$days$d2;
      return Number(((_w$days$d2 = w.days[d]) === null || _w$days$d2 === void 0 ? void 0 : _w$days$d2.sleepHours) || 0);
    }).filter(function (v) {
      return v > 0;
    });
    row.sleep = sleepVals.length ? parseFloat((sleepVals.reduce(function (a, b) {
      return a + b;
    }, 0) / sleepVals.length).toFixed(1)) : 0;
    var skillVals = DAYS.map(function (d) {
      var _w$days$d3;
      return (_w$days$d3 = w.days[d]) === null || _w$days$d3 === void 0 ? void 0 : _w$days$d3.skills;
    }).filter(function (s) {
      return s !== "" && s !== undefined;
    }).map(Number);
    row.skills = skillVals.length ? parseFloat((skillVals.reduce(function (a, b) {
      return a + b;
    }, 0) / skillVals.length).toFixed(1)) : 0;
    row.days = DAYS.filter(function (d) {
      var _w$days$d4, _w$days$d5, _w$days$d6;
      return ((_w$days$d4 = w.days[d]) === null || _w$days$d4 === void 0 ? void 0 : _w$days$d4.journal) || ((_w$days$d5 = w.days[d]) === null || _w$days$d5 === void 0 ? void 0 : _w$days$d5.journalEmotion) || Number((_w$days$d6 = w.days[d]) === null || _w$days$d6 === void 0 ? void 0 : _w$days$d6.targetUrge) > 0;
    }).length;
    return row;
  });
  var StatCard = function StatCard(_ref17) {
    var label = _ref17.label,
      value = _ref17.value,
      sub = _ref17.sub,
      color = _ref17.color;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--card)",
        borderRadius: 12,
        padding: "14px",
        border: "1px solid var(--border)",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--muted)",
        marginBottom: 6
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: color || "var(--accent)",
        fontFamily: "var(--mono)"
      }
    }, value), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--muted)",
        marginTop: 3
      }
    }, sub));
  };
  var latest = chartData[chartData.length - 1];
  var prev = chartData[chartData.length - 2];
  var sleepTrend = prev && latest.sleep > prev.sleep ? "↑" : prev && latest.sleep < prev.sleep ? "↓" : "→";
  var skillsTrend = prev && latest.skills > prev.skills ? "↑" : prev && latest.skills < prev.skills ? "↓" : "→";
  var ChartLine = function ChartLine(_ref18) {
    var data = _ref18.data,
      dataKey = _ref18.dataKey,
      color = _ref18.color,
      _ref18$width = _ref18.width,
      width = _ref18$width === void 0 ? 300 : _ref18$width,
      _ref18$height = _ref18.height,
      height = _ref18$height === void 0 ? 100 : _ref18$height;
    var vals = data.map(function (d) {
      return d[dataKey];
    });
    var max = Math.max.apply(Math, _toConsumableArray(vals).concat([1]));
    var min = 0;
    var pts = vals.map(function (v, i) {
      var x = i / Math.max(vals.length - 1, 1) * (width - 20) + 10;
      var y = height - 10 - (v - min) / (max - min) * (height - 20);
      return x + "," + y;
    }).join(" ");
    return /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      viewBox: "0 0 " + width + " " + height,
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("polyline", {
      points: pts,
      fill: "none",
      stroke: color,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), vals.map(function (v, i) {
      var x = i / Math.max(vals.length - 1, 1) * (width - 20) + 10;
      var y = height - 10 - (v - min) / (max - min) * (height - 20);
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: x,
        cy: y,
        r: "4",
        fill: color
      });
    }), data.map(function (d, i) {
      var x = i / Math.max(data.length - 1, 1) * (width - 20) + 10;
      return /*#__PURE__*/React.createElement("text", {
        key: i,
        x: x,
        y: height,
        textAnchor: "middle",
        fontSize: "9",
        fill: "#9e8e7e"
      }, d.week);
    }));
  };
  var rangeLabel = timeRange === "week" ? "This week" : timeRange === "month" ? "Last 4 weeks" : "All time";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 20,
      color: "var(--fg)",
      fontStyle: "italic"
    }
  }, "Trends"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg Sleep",
    value: latest.sleep + "h",
    sub: prev ? sleepTrend + " vs last week" : "this week",
    color: "#b08a6e"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg Skills",
    value: latest.skills + "/7",
    sub: prev ? skillsTrend + " vs last week" : "this week",
    color: "#8a7eb0"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Days Logged",
    value: latest.days + "/7",
    sub: "this week"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: 14,
      padding: "16px",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--accent)"
    }
  }, "Quadrant Breakdown"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, totalCheckins, " check-ins")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 14,
      background: "var(--surface)",
      padding: 4,
      borderRadius: 10
    }
  }, [["week", "Week"], ["month", "Month"], ["all", "All time"]].map(function (_ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
      k = _ref20[0],
      lbl = _ref20[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setTimeRange(k);
      },
      style: {
        flex: 1,
        padding: "7px 4px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        border: "none",
        background: timeRange === k ? "var(--card)" : "transparent",
        color: timeRange === k ? "var(--fg)" : "var(--muted)",
        boxShadow: timeRange === k ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        fontFamily: "var(--body)"
      }
    }, lbl);
  })), totalCheckins === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      textAlign: "center",
      padding: "20px 0",
      fontStyle: "italic"
    }
  }, "No emotions rated above 0 in ", rangeLabel.toLowerCase(), " yet.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["red", "yellow", "blue", "green"].map(function (qKey) {
    var q = MOOD_METER[qKey];
    var count = quadrantCounts[qKey] || 0;
    var pct = totalCheckins ? count / totalCheckins * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: qKey
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: q.color
      }
    }, q.label, " \xB7 ", q.sublabel), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: q.color,
        fontFamily: "var(--mono)"
      }
    }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        background: q.bg,
        borderRadius: 6,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: pct + "%",
        background: q.color,
        borderRadius: 6,
        transition: "width 0.3s"
      }
    })));
  }), quadrantCounts.other > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--muted)"
    }
  }, "Other (uncategorized)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--muted)",
      fontFamily: "var(--mono)"
    }
  }, Math.round(quadrantCounts.other / totalCheckins * 100), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: "var(--surface)",
      borderRadius: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: quadrantCounts.other / totalCheckins * 100 + "%",
      background: "var(--muted)",
      borderRadius: 6
    }
  }))))), weeks.length >= 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: 14,
      padding: "16px",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#b08a6e",
      marginBottom: 14
    }
  }, "Sleep Hours"), /*#__PURE__*/React.createElement(ChartLine, {
    data: chartData,
    dataKey: "sleep",
    color: "#b08a6e",
    height: 90
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: 14,
      padding: "16px",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#8a7eb0",
      marginBottom: 14
    }
  }, "Skills Score (avg)"), /*#__PURE__*/React.createElement(ChartLine, {
    data: chartData,
    dataKey: "skills",
    color: "#8a7eb0",
    height: 90
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: 14,
      padding: "16px",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--accent)",
      marginBottom: 12
    }
  }, "Emotions (weekly avg)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 14
    }
  }, emotions.map(function (em, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: em,
      onClick: function onClick() {
        return setActiveEmotion(activeEmotion === em ? null : em);
      },
      style: {
        padding: "5px 12px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
        border: "1.5px solid " + (activeEmotion === em ? EMOTION_COLORS[i % EMOTION_COLORS.length] : "var(--border)"),
        background: activeEmotion === em ? EMOTION_COLORS[i % EMOTION_COLORS.length] : "var(--surface)",
        color: activeEmotion === em ? "#fff" : "var(--muted)",
        cursor: "pointer",
        fontFamily: "var(--body)"
      }
    }, em);
  })), activeEmotion && /*#__PURE__*/React.createElement(ChartLine, {
    data: chartData,
    dataKey: activeEmotion,
    color: EMOTION_COLORS[emotions.indexOf(activeEmotion) % EMOTION_COLORS.length],
    height: 90
  }), !activeEmotion && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Tap an emotion to see its trend"))), weeks.length < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderRadius: 14,
      padding: "20px",
      textAlign: "center",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, "Weekly trend charts appear after 2+ weeks of data.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      textAlign: "center"
    }
  }, weeks.length, " ", weeks.length === 1 ? "week" : "weeks", " of data \xB7 ", weeks.length >= 4 ? "Good trend visibility" : "More weeks = clearer trends"));
}
function WeekReport(_ref21) {
  var _week$skillsProgress, _week$skillsProgress2;
  var week = _ref21.week;
  var weekStartDate = parseLocalDate(week.weekStart);
  var weekEnd = parseLocalDate(week.weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  var fmt = function fmt(d) {
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };
  var weekRange = "".concat(fmt(weekStartDate), " \u2013 ").concat(fmt(weekEnd));
  var emotions = week.trackedEmotions || DEFAULT_EMOTIONS;
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    csvCopied = _useState28[0],
    setCsvCopied = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    copied = _useState30[0],
    setCopied = _useState30[1];
  var _useState31 = useState("idle"),
    _useState32 = _slicedToArray(_useState31, 2),
    pdfState = _useState32[0],
    setPdfState = _useState32[1]; // idle | loading | done | error

  var buildCsvRow = function buildCsvRow() {
    var sleepVals = DAYS.map(function (d) {
      var _week$days$d;
      return Number(((_week$days$d = week.days[d]) === null || _week$days$d === void 0 ? void 0 : _week$days$d.sleepHours) || 0);
    }).filter(function (v) {
      return v > 0;
    });
    var avgSleep = sleepVals.length ? (sleepVals.reduce(function (a, b) {
      return a + b;
    }, 0) / sleepVals.length).toFixed(1) : "";
    var skillVals = DAYS.map(function (d) {
      var _week$days$d2;
      return (_week$days$d2 = week.days[d]) === null || _week$days$d2 === void 0 ? void 0 : _week$days$d2.skills;
    }).filter(function (s) {
      return s !== "" && s !== undefined;
    }).map(Number);
    var avgSkills = skillVals.length ? (skillVals.reduce(function (a, b) {
      return a + b;
    }, 0) / skillVals.length).toFixed(1) : "";
    var daysCompleted = DAYS.filter(function (d) {
      var _week$days$d3, _week$days$d4, _week$days$d5;
      return ((_week$days$d3 = week.days[d]) === null || _week$days$d3 === void 0 ? void 0 : _week$days$d3.journal) || ((_week$days$d4 = week.days[d]) === null || _week$days$d4 === void 0 ? void 0 : _week$days$d4.journalEmotion) || Number((_week$days$d5 = week.days[d]) === null || _week$days$d5 === void 0 ? void 0 : _week$days$d5.targetUrge) > 0;
    }).length;
    var meditationDays = DAYS.filter(function (d) {
      var _week$days$d6;
      return ((_week$days$d6 = week.days[d]) === null || _week$days$d6 === void 0 ? void 0 : _week$days$d6.meditation) === "Y";
    }).length;
    var row = [week.weekStart, daysCompleted].concat(_toConsumableArray(ALL_EMOTIONS.map(function (em) {
      var vals = DAYS.map(function (d) {
        var _week$days$d7;
        return Number(((_week$days$d7 = week.days[d]) === null || _week$days$d7 === void 0 || (_week$days$d7 = _week$days$d7.emotions) === null || _week$days$d7 === void 0 ? void 0 : _week$days$d7[em]) || 0);
      });
      return (vals.reduce(function (a, b) {
        return a + b;
      }, 0) / 7).toFixed(1);
    })), [avgSleep, avgSkills, week.targetBehavior || "", meditationDays]);
    return row.join("\t");
  };
  var copyCsv = function copyCsv() {
    var text = buildCsvRow();
    navigator.clipboard.writeText(text).then(function () {
      setCsvCopied(true);
      setTimeout(function () {
        return setCsvCopied(false);
      }, 3000);
    }).catch(function () {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCsvCopied(true);
      setTimeout(function () {
        return setCsvCopied(false);
      }, 3000);
    });
  };
  var downloadPdf = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setPdfState("loading");
            _context.p = 1;
            _context.n = 2;
            return ensureJsPdf();
          case 2:
            _context.n = 3;
            return generateDiaryPdf(week, weekRange, emotions);
          case 3:
            setPdfState("done");
            setTimeout(function () {
              return setPdfState("idle");
            }, 2500);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error(_t);
            setPdfState("error");
            alert("PDF generation failed: " + ((_t === null || _t === void 0 ? void 0 : _t.message) || "unknown error") + "\n\nIf you're offline, the PDF library couldn't load. Try again with internet.");
            setTimeout(function () {
              return setPdfState("idle");
            }, 2000);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return function downloadPdf() {
      return _ref22.apply(this, arguments);
    };
  }();
  var buildTextReport = function buildTextReport() {
    var out = [];
    out.push("DBT WEEKLY DIARY CARD");
    out.push("Taylor Abeel  |  " + weekRange);
    if (week.targetBehavior) {
      out.push("Target Behavior: " + week.targetBehavior);
    }
    var activeDays = DAYS.filter(function (day) {
      var d = week.days[day];
      return Number(d.targetUrge) > 0 || d.targetDid || d.meditation || d.sleepHours || d.skills !== "";
    });
    if (activeDays.length > 0) {
      out.push("");
      out.push("DAILY SUMMARY");
      activeDays.forEach(function (day) {
        var i = DAYS.indexOf(day);
        var d = week.days[day];
        var sleep = d.sleepHours ? "".concat(d.sleepHours, "h").concat(d.sleepQuality ? " (".concat(d.sleepQuality, ")") : "") : "—";
        var skills = d.skills !== "" && d.skills !== undefined ? "".concat(d.skills, "/7") : "—";
        var med = d.meditation || "—";
        var emParts = emotions.map(function (em) {
          var _d$emotions;
          var val = (_d$emotions = d.emotions) === null || _d$emotions === void 0 ? void 0 : _d$emotions[em];
          return val && Number(val) > 0 ? "".concat(em, ": ").concat(val) : null;
        }).filter(Boolean);
        out.push("");
        out.push(DAY_FULL[i] + " — Urge: " + (d.targetUrge || "0") + "  Did it: " + (d.targetDid || "—") + "  Meditation: " + med + "  Sleep: " + sleep + "  Skills: " + skills);
        if (emParts.length > 0) out.push("  " + emParts.join("  "));
      });
    }
    var journalDays = DAYS.filter(function (day) {
      var d = week.days[day];
      return d.journal || d.journalEmotion || d.skillUsed;
    });
    if (journalDays.length > 0) {
      out.push("");
      out.push("DAILY JOURNAL");
      journalDays.forEach(function (day) {
        var i = DAYS.indexOf(day);
        var d = week.days[day];
        out.push("");
        out.push(DAY_FULL[i]);
        if (d.journalEmotion) {
          var before = d.journalRating ? " (".concat(d.journalRating, "/5") : "";
          var after = d.afterRating ? " \u2192 ".concat(d.afterRating, "/5)") : before ? ")" : "";
          out.push("  Emotion: " + d.journalEmotion + before + after);
        }
        if (d.skillUsed) out.push("  Skill: " + d.skillUsed);
        if (d.journal) out.push("  Notes: " + d.journal);
      });
    }
    var sp = week.skillsProgress || {};
    var ratedMods = SKILLS_PROGRESS_MODULES.filter(function (m) {
      return (sp[m.key] || {}).capacity || (sp[m.key] || {}).confidence;
    });
    if (ratedMods.length > 0 || sp.mostConfident || sp.wantToGrow) {
      out.push("");
      out.push("SKILLS PROGRESS");
      ratedMods.forEach(function (mod) {
        var vals = sp[mod.key] || {};
        var line = mod.label + " — Cap: " + (vals.capacity || "—") + "/5  Conf: " + (vals.confidence || "—") + "/5";
        out.push("  " + line);
      });
      if (sp.mostConfident) out.push("  Most confident: " + sp.mostConfident);
      if (sp.wantToGrow) out.push("  Want to grow: " + sp.wantToGrow);
    }
    out.push("");
    out.push("Generated " + new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }) + " — DBT Diary Card — Taylor Abeel");
    return out.join("\n");
  };
  var copyReport = function copyReport() {
    var text = buildTextReport();
    navigator.clipboard.writeText(text).then(function () {
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 3000);
    }).catch(function () {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 3000);
    });
  };
  var pdfLabel = pdfState === "loading" ? "Generating PDF…" : pdfState === "done" ? "✓ PDF Downloaded" : pdfState === "error" ? "Try Again" : "📄 Download PDF for Therapist";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: downloadPdf,
    disabled: pdfState === "loading",
    style: {
      background: pdfState === "done" ? "#5a8a6a" : "var(--accent)",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: 15,
      padding: "16px",
      borderRadius: 12,
      cursor: pdfState === "loading" ? "wait" : "pointer",
      fontFamily: "var(--body)",
      opacity: pdfState === "loading" ? 0.8 : 1,
      transition: "background 0.2s"
    }
  }, pdfLabel), /*#__PURE__*/React.createElement("button", {
    onClick: copyReport,
    style: {
      background: copied ? "#5a8a6a" : "var(--surface)",
      border: "1.5px solid var(--border)",
      color: copied ? "#fff" : "var(--fg-soft)",
      fontWeight: 600,
      fontSize: 14,
      padding: "13px",
      borderRadius: 12,
      cursor: "pointer",
      fontFamily: "var(--body)",
      transition: "background 0.2s"
    }
  }, copied ? "✓ Text Report Copied" : "📋 Copy Text Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: 14,
      padding: "16px",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--fg)",
      marginBottom: 4
    }
  }, "\uD83D\uDCCA Google Sheets"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      lineHeight: 1.6,
      marginBottom: 10
    }
  }, "Copy this week's data and paste it into the next empty row in your shared sheet."), /*#__PURE__*/React.createElement("a", {
    href: "https://docs.google.com/spreadsheets/d/1IIl0G36OLTe9cKHk4S6B6psyhUbttu2xxpjBR023Cw8/edit?gid=614495511#gid=614495511",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "block",
      textAlign: "center",
      padding: "10px",
      marginBottom: 10,
      borderRadius: 10,
      border: "1.5px solid var(--border)",
      background: "var(--surface)",
      color: "var(--accent)",
      fontWeight: 600,
      fontSize: 13,
      textDecoration: "none"
    }
  }, "\uD83D\uDCC5 Open Google Sheet \u2197"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return copyCsv();
    },
    style: {
      width: "100%",
      background: csvCopied ? "#5a8a6a" : "var(--accent)",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      padding: "13px",
      borderRadius: 10,
      cursor: "pointer",
      fontFamily: "var(--body)",
      transition: "background 0.2s"
    }
  }, csvCopied ? "✓ Copied!" : "📋 Copy Week Data for Sheets")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 14,
      padding: "18px 16px",
      border: "1px solid var(--border)",
      color: "#000"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderBottom: "2px solid #000",
      paddingBottom: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 18,
      fontStyle: "italic"
    }
  }, "DBT Weekly Diary Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#555",
      marginTop: 3
    }
  }, weekRange)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Taylor Abeel"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#777"
    }
  }, "Client Report"))), week.targetBehavior && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#f0f0f0",
      borderRadius: 6,
      padding: "8px 10px",
      marginBottom: 14,
      fontSize: 12,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.09em",
      color: "#555",
      marginBottom: 2
    }
  }, "Target Behavior"), week.targetBehavior), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#555",
      marginBottom: 10
    }
  }, "Daily Summary"), DAYS.map(function (day, i) {
    var d = week.days[day];
    var emotionStr = emotions.map(function (em) {
      var _d$emotions$em, _d$emotions2;
      return "".concat(em, " ").concat((_d$emotions$em = (_d$emotions2 = d.emotions) === null || _d$emotions2 === void 0 ? void 0 : _d$emotions2[em]) !== null && _d$emotions$em !== void 0 ? _d$emotions$em : "0");
    }).join(" · ");
    var sleep = d.sleepHours ? "".concat(d.sleepHours, "h").concat(d.sleepQuality ? " (".concat(d.sleepQuality, ")") : "") : "—";
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 12,
        marginBottom: 4
      }
    }, DAY_FULL[i]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#444",
        lineHeight: 1.7
      }
    }, /*#__PURE__*/React.createElement("span", null, "Urge: ", d.targetUrge || "0", " \xA0 Did it: ", d.targetDid || "—", " \xA0 Meditation: ", d.meditation || "—", " \xA0 Sleep: ", sleep, " \xA0 Skills: ", d.skills !== "" && d.skills !== undefined ? "".concat(d.skills, "/7") : "—"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#666"
      }
    }, emotionStr)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#555",
      marginBottom: 10,
      marginTop: 4
    }
  }, "Daily Journal"), DAYS.map(function (day, i) {
    var d = week.days[day];
    var hasEntry = d.journal || d.journalEmotion || d.skillUsed;
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--display)",
        fontSize: 12,
        fontStyle: "italic",
        fontWeight: 700,
        marginBottom: 4
      }
    }, DAY_FULL[i]), !hasEntry ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#bbb",
        fontStyle: "italic"
      }
    }, "No entry recorded") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        marginBottom: d.journal ? 6 : 0
      }
    }, d.journalEmotion && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        color: "#888"
      }
    }, "Emotion "), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11
      }
    }, d.journalEmotion, d.journalRating ? " (".concat(d.journalRating, "/5").concat(d.afterRating ? " \u2192 ".concat(d.afterRating, "/5") : "", ")") : "")), d.skillUsed && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        textTransform: "uppercase",
        color: "#888"
      }
    }, "Skill "), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11
      }
    }, d.skillUsed))), d.journal && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#f5f5f5",
        borderRadius: 5,
        padding: "6px 9px",
        fontSize: 11,
        lineHeight: 1.6
      }
    }, d.journal)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#555",
      marginBottom: 8,
      marginTop: 4
    }
  }, "Skills Progress"), SKILLS_PROGRESS_MODULES.map(function (mod) {
    var vals = (week.skillsProgress || {})[mod.key] || {};
    return /*#__PURE__*/React.createElement("div", {
      key: mod.key,
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0",
        borderBottom: "1px solid #eee",
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, mod.icon, " ", mod.label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#555"
      }
    }, "Cap ", vals.capacity || "—", "/5 \xB7 Conf ", vals.confidence || "—", "/5"));
  }), (((_week$skillsProgress = week.skillsProgress) === null || _week$skillsProgress === void 0 ? void 0 : _week$skillsProgress.mostConfident) || ((_week$skillsProgress2 = week.skillsProgress) === null || _week$skillsProgress2 === void 0 ? void 0 : _week$skillsProgress2.wantToGrow)) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11,
      color: "#666"
    }
  }, week.skillsProgress.mostConfident && /*#__PURE__*/React.createElement("div", null, "Most confident: ", week.skillsProgress.mostConfident), week.skillsProgress.wantToGrow && /*#__PURE__*/React.createElement("div", null, "Want to grow: ", week.skillsProgress.wantToGrow)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 10,
      borderTop: "1px solid #ddd",
      fontSize: 9,
      color: "#bbb",
      textAlign: "center"
    }
  }, "Generated ", new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }), " \xB7 Taylor Abeel")));
}
function WeekOverview(_ref23) {
  var week = _ref23.week,
    onSelectDay = _ref23.onSelectDay,
    isLatest = _ref23.isLatest;
  var completedDays = DAYS.filter(function (d) {
    var day = week.days[d];
    return day.journal || day.journalEmotion || Number(day.targetUrge) > 0;
  }).length;
  var weekStartDate = parseLocalDate(week.weekStart);
  var todayStr = localDateStr(new Date());
  var dayDates = DAYS.map(function (_, i) {
    var d = new Date(weekStartDate);
    d.setDate(weekStartDate.getDate() + i);
    return localDateStr(d);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, week.targetBehavior && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--accent)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      display: "block",
      marginBottom: 5
    }
  }, "Target Behavior"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--fg)"
    }
  }, week.targetBehavior)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted)"
    }
  }, "Week progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: "var(--mono)",
      color: "var(--accent)"
    }
  }, completedDays, "/7 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--surface)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(completedDays / 7 * 100, "%"),
      background: "var(--accent)",
      borderRadius: 3,
      transition: "width 0.4s"
    }
  }))), DAYS.map(function (day, i) {
    var d = week.days[day];
    var hasData = d.journal || d.journalEmotion || Number(d.targetUrge) > 0;
    var isToday = dayDates[i] === todayStr;
    var dateLabel = function () {
      var dt = new Date(weekStartDate);
      dt.setDate(weekStartDate.getDate() + i);
      return dt.getMonth() + 1 + "/" + dt.getDate();
    }();
    return /*#__PURE__*/React.createElement("button", {
      key: day,
      onClick: function onClick() {
        return onSelectDay(day);
      },
      style: {
        background: isToday ? "var(--accent)08" : "var(--card)",
        borderRadius: 14,
        padding: "15px 16px",
        border: "".concat(isToday ? "2px" : "1.5px", " solid ").concat(isToday ? "var(--accent)" : hasData ? "var(--accent)60" : "var(--border)"),
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--display)",
        fontSize: 18,
        color: isToday ? "var(--accent)" : "var(--fg)",
        fontStyle: "italic",
        fontWeight: isToday ? 700 : 400
      }
    }, DAY_FULL[i]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: isToday ? "var(--accent)" : "var(--muted)",
        fontFamily: "var(--mono)"
      }
    }, dateLabel, isToday ? " • Today" : "")), hasData ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted)",
        marginTop: 3
      }
    }, d.journalEmotion && /*#__PURE__*/React.createElement("span", null, d.journalEmotion, " \xB7 "), d.sleepHours && /*#__PURE__*/React.createElement("span", null, d.sleepHours, "h sleep \xB7 "), d.skills !== "" && /*#__PURE__*/React.createElement("span", null, "Skills: ", d.skills, "/7")) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: isToday ? "var(--accent)80" : "var(--border)",
        marginTop: 3
      }
    }, isToday ? "Tap to log today" : "Not started")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: isToday ? "var(--accent)" : hasData ? "var(--accent)" : "var(--border)",
        flexShrink: 0
      }
    }));
  }));
}
var TABS = [{
  id: "Week",
  icon: "📋"
}, {
  id: "Feelings",
  icon: "💭"
}, {
  id: "Skills",
  icon: "📖"
}, {
  id: "Progress",
  icon: "📈"
}, {
  id: "Trends",
  icon: "📊"
}, {
  id: "Report",
  icon: "📄"
}, {
  id: "Settings",
  icon: "⚙️"
}];
function App() {
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    appData = _useState34[0],
    setAppData = _useState34[1];
  var _useState35 = useState(0),
    _useState36 = _slicedToArray(_useState35, 2),
    activeWeekIdx = _useState36[0],
    setActiveWeekIdx = _useState36[1];
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    activeDay = _useState38[0],
    setActiveDay = _useState38[1];
  var _useState39 = useState("Week"),
    _useState40 = _slicedToArray(_useState39, 2),
    tab = _useState40[0],
    setTab = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    saving = _useState42[0],
    setSaving = _useState42[1];

  // Flush pending save immediately when iOS hides the app (switch apps, Home button)
  useEffect(function () {
    var handleHide = function handleHide() {
      if (document.visibilityState === "hidden" && appDataRef.current) {
        if (saveRef.current) {
          clearTimeout(saveRef.current);
          saveRef.current = null;
        }
        saveData(appDataRef.current); // fire-and-forget — best effort before page dies
      }
    };
    document.addEventListener("visibilitychange", handleHide);
    return function () {
      return document.removeEventListener("visibilitychange", handleHide);
    };
  }, []);

  // Extracted so both initial load and import can use it
  var applyRollover = function applyRollover(data) {
    var today = localDateStr(new Date());
    var weeks = _toConsumableArray(data.weeks);
    var rolled = 0;
    while (rolled < 52) {
      var last = weeks[weeks.length - 1];
      var nextMonday = parseLocalDate(last.weekStart);
      nextMonday.setDate(nextMonday.getDate() + 7);
      if (today >= localDateStr(nextMonday)) {
        var w = emptyWeek(data.settings.trackedEmotions || DEFAULT_EMOTIONS, data.settings.targetBehavior || "");
        w.weekStart = localDateStr(nextMonday);
        if (last.skillsProgress) w.skillsProgress = JSON.parse(JSON.stringify(last.skillsProgress));
        if (last.customEmotionQuadrants) w.customEmotionQuadrants = _objectSpread({}, last.customEmotionQuadrants);
        weeks = [].concat(_toConsumableArray(weeks), [w]);
        rolled++;
      } else {
        break;
      }
    }
    return {
      newData: _objectSpread(_objectSpread({}, data), {}, {
        weeks: weeks
      }),
      rolled: rolled
    };
  };
  useEffect(function () {
    loadData().then(function (data) {
      if (!data) {
        var w = emptyWeek(DEFAULT_EMOTIONS, "");
        setAppData({
          settings: {
            trackedEmotions: DEFAULT_EMOTIONS,
            targetBehavior: ""
          },
          weeks: [w]
        });
        setActiveWeekIdx(0);
        return;
      }
      var _applyRollover = applyRollover(data),
        newData = _applyRollover.newData,
        rolled = _applyRollover.rolled;
      setAppData(newData);
      if (rolled > 0) saveData(newData);
      setActiveWeekIdx(newData.weeks.length - 1);
    });
  }, []);
  var saveRef = useRef(null);
  var appDataRef = useRef(null);

  // Keep ref in sync so visibilitychange handler can access latest state
  useEffect(function () {
    appDataRef.current = appData;
  }, [appData]);
  var persist = function persist(updated) {
    setAppData(updated);
    setSaving(true);
    if (saveRef.current) clearTimeout(saveRef.current);
    saveRef.current = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return saveData(updated);
          case 1:
            setSaving(false);
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    })), 400);
  };
  var flushSave = function flushSave() {
    if (saveRef.current && appDataRef.current) {
      clearTimeout(saveRef.current);
      saveRef.current = null;
      saveData(appDataRef.current).then(function () {
        return setSaving(false);
      });
    }
  };
  var currentWeek = appData === null || appData === void 0 ? void 0 : appData.weeks[activeWeekIdx];
  var updateDay = function updateDay(day, dayData) {
    var weeks = _toConsumableArray(appData.weeks);
    weeks[activeWeekIdx] = _objectSpread(_objectSpread({}, currentWeek), {}, {
      days: _objectSpread(_objectSpread({}, currentWeek.days), {}, _defineProperty({}, day, dayData))
    });
    persist(_objectSpread(_objectSpread({}, appData), {}, {
      weeks: weeks
    }));
  };
  var updateSettings = function updateSettings(newSettings) {
    var weeks = _toConsumableArray(appData.weeks);
    weeks[activeWeekIdx] = _objectSpread(_objectSpread({}, currentWeek), {}, {
      targetBehavior: newSettings.targetBehavior,
      trackedEmotions: newSettings.trackedEmotions
    });
    persist(_objectSpread(_objectSpread({}, appData), {}, {
      settings: _objectSpread(_objectSpread({}, appData.settings), newSettings),
      weeks: weeks
    }));
  };
  var updateSkillsProgress = function updateSkillsProgress(sp) {
    var weeks = _toConsumableArray(appData.weeks);
    weeks[activeWeekIdx] = _objectSpread(_objectSpread({}, currentWeek), {}, {
      skillsProgress: sp
    });
    persist(_objectSpread(_objectSpread({}, appData), {}, {
      weeks: weeks
    }));
  };
  var addNewWeek = function addNewWeek() {
    var last = appData.weeks[appData.weeks.length - 1];
    var next = parseLocalDate(last.weekStart);
    next.setDate(next.getDate() + 7);
    var w = emptyWeek(appData.settings.trackedEmotions, appData.settings.targetBehavior || "");
    w.weekStart = localDateStr(next);
    // Carry forward skills progress so weekly ratings persist; user can adjust.
    if (last.skillsProgress) w.skillsProgress = JSON.parse(JSON.stringify(last.skillsProgress));
    // Carry forward custom emotion quadrant mappings so labels stay consistent.
    if (last.customEmotionQuadrants) w.customEmotionQuadrants = _objectSpread({}, last.customEmotionQuadrants);
    var weeks = [].concat(_toConsumableArray(appData.weeks), [w]);
    persist(_objectSpread(_objectSpread({}, appData), {}, {
      weeks: weeks
    }));
    setActiveWeekIdx(weeks.length - 1);
    setActiveDay(null);
  };
  if (!appData) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#ede8df",
      color: "#9e8e7e",
      fontFamily: "sans-serif"
    }
  }, "Loading\u2026");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap'); :root { --bg: #ede8df; --card: #f5f0e8; --surface: #e8e1d5; --border: #d4c9b8; --fg: #4a3f32; --fg-soft: #6b5c4a; --muted: #9e8e7e; --accent: #7a9e87; --display: 'Lora', serif; --body: 'DM Sans', sans-serif; --mono: 'DM Mono', monospace; } * { box-sizing: border-box; margin: 0; padding: 0; } body { background: var(--bg); font-family: var(--body); color: var(--fg); } input, select, textarea { outline: none; color: var(--fg); font-family: var(--body); } input:focus, select:focus, textarea:focus { border-color: var(--accent) !important; } input[type=range] { -webkit-appearance: none; height: 4px; background: var(--border); border-radius: 2px; border: none !important; } input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--accent); cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.12); } button { font-family: var(--body); } select { appearance: none; -webkit-appearance: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239e8e7e' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px !important; } @media print { .no-print { display: none !important; } body { background: #fff !important; } #report-content { color: #000 !important; } }"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      margin: "0 auto",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 14px",
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--display)",
      fontSize: 22,
      color: "var(--fg)",
      fontStyle: "italic"
    }
  }, "DBT Diary Card"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      letterSpacing: "0.06em",
      marginTop: 2
    }
  }, "Week of ", (currentWeek === null || currentWeek === void 0 ? void 0 : currentWeek.weekStart) || "—", saving && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      marginLeft: 8
    }
  }, "saving\u2026"))), activeDay && tab === "Week" && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveDay(null);
    },
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 20,
      padding: "6px 14px",
      color: "var(--muted)",
      fontSize: 13,
      cursor: "pointer"
    }
  }, "\u2190 Week")), appData.weeks.length > 1 && tab === "Week" && !activeDay && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 10,
      overflowX: "auto",
      paddingBottom: 2
    }
  }, appData.weeks.map(function (w, i) {
    var isCurrentWeek = i === appData.weeks.length - 1;
    var d = parseLocalDate(w.weekStart);
    var label = isCurrentWeek ? "This week" : d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        setActiveWeekIdx(i);
        setActiveDay(null);
      },
      style: {
        flexShrink: 0,
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        border: "1.5px solid",
        cursor: "pointer",
        borderColor: i === activeWeekIdx ? "var(--accent)" : "var(--border)",
        background: i === activeWeekIdx ? "var(--accent)" : "transparent",
        color: i === activeWeekIdx ? "#fff" : "var(--muted)"
      }
    }, label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px 18px 20px"
    }
  }, tab === "Week" && !activeDay && /*#__PURE__*/React.createElement(WeekOverview, {
    week: currentWeek,
    onSelectDay: function onSelectDay(d) {
      return setActiveDay(d);
    },
    isLatest: activeWeekIdx === appData.weeks.length - 1
  }), tab === "Week" && activeDay && /*#__PURE__*/React.createElement(DayEntry, {
    dayFull: DAY_FULL[DAYS.indexOf(activeDay)],
    dayDate: function () {
      var ws = parseLocalDate(currentWeek.weekStart);
      ws.setDate(ws.getDate() + DAYS.indexOf(activeDay));
      return ws.getMonth() + 1 + "/" + ws.getDate();
    }(),
    data: currentWeek.days[activeDay],
    trackedEmotions: currentWeek.trackedEmotions || appData.settings.trackedEmotions,
    targetBehavior: currentWeek.targetBehavior || "",
    customEmotionQuadrants: currentWeek.customEmotionQuadrants || {},
    onAddCustomEmotion: function onAddCustomEmotion(name, quadrant) {
      var weeks = appData.weeks.map(function (w, i) {
        if (i !== activeWeekIdx) return w;
        var cq = _objectSpread(_objectSpread({}, w.customEmotionQuadrants || {}), {}, _defineProperty({}, name, quadrant));
        return _objectSpread(_objectSpread({}, w), {}, {
          customEmotionQuadrants: cq
        });
      });
      persist(_objectSpread(_objectSpread({}, appData), {}, {
        weeks: weeks
      }));
    },
    onChange: function onChange(d) {
      return updateDay(activeDay, d);
    },
    onFlush: flushSave
  }), tab === "Trends" && /*#__PURE__*/React.createElement(TrendsDashboard, {
    weeks: appData.weeks
  }), tab === "Progress" && /*#__PURE__*/React.createElement(SkillsProgress, {
    progress: currentWeek.skillsProgress || emptySkillsProgress(),
    onChange: updateSkillsProgress
  }), tab === "Report" && /*#__PURE__*/React.createElement(WeekReport, {
    week: currentWeek
  }), tab === "Feelings" && /*#__PURE__*/React.createElement(FeelingsWheel, null), tab === "Skills" && /*#__PURE__*/React.createElement(SkillsReference, null), tab === "Settings" && /*#__PURE__*/React.createElement(Settings, {
    settings: {
      trackedEmotions: currentWeek.trackedEmotions || appData.settings.trackedEmotions,
      targetBehavior: currentWeek.targetBehavior || ""
    },
    onSave: updateSettings,
    onExport: function onExport() {
      var json = JSON.stringify(appData);
      navigator.clipboard.writeText(json).catch(function () {
        var ta = document.createElement("textarea");
        ta.value = json;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      });
      alert("Data copied to clipboard. Paste it into the new app version using Import Data.");
    },
    onImport: function onImport(json) {
      try {
        var parsed = JSON.parse(json);
        if (!parsed.weeks || !parsed.settings) {
          alert("Invalid data — make sure you copied the full export.");
          return;
        }
        var _applyRollover2 = applyRollover(parsed),
          newData = _applyRollover2.newData,
          rolled = _applyRollover2.rolled;
        persist(newData);
        if (rolled > 0) saveData(newData);
        setActiveWeekIdx(newData.weeks.length - 1);
        setActiveDay(null);
        alert("Data imported successfully!");
      } catch (e) {
        alert("Import failed — invalid format.");
      }
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 520,
      background: "var(--card)",
      borderTop: "1px solid var(--border)",
      display: "flex",
      padding: "10px 0 22px"
    }
  }, TABS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        setTab(t.id);
        if (t.id !== "Week") setActiveDay(null);
      },
      style: {
        flex: 1,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: tab === t.id ? "var(--accent)" : "var(--muted)",
        fontWeight: tab === t.id ? 700 : 400,
        fontSize: 9,
        padding: "4px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15
      }
    }, t.icon), t.id);
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
