
const eventsData = [
  { name: "abort", category: "UiEvent, Event", description: "The loading of a media is aborted", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onabort.asp" },
  { name: "afterprint", category: "Event", description: "A page has started printing", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onafterprint.asp" },
  { name: "animationend", category: "AnimationEvent", description: "A CSS animation has completed", supported: "-", reference: "https://www.w3schools.com/jsref/event_animationend.asp" },
  { name: "animationiteration", category: "AnimationEvent", description: "A CSS animation is repeated", supported: "-", reference: "https://www.w3schools.com/jsref/event_animationiteration.asp" },
  { name: "animationstart", category: "AnimationEvent", description: "A CSS animation has started", supported: "-", reference: "https://www.w3schools.com/jsref/event_animationstart.asp" },
  { name: "beforeprint", category: "Event", description: "A page is about to be printed", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onbeforeprint.asp" },
  { name: "beforeunload", category: "UiEvent, Event", description: "Before a document is about to be unloaded", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onbeforeunload.asp" },
  { name: "blur", category: "FocusEvent", description: "An element loses focus", supported: "Most HTML elements", reference: "https://www.w3schools.com/jsref/event_onblur.asp" },
  { name: "canplay", category: "Event", description: "The browser can start playing a media", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_oncanplay.asp" },
  { name: "canplaythrough", category: "Event", description: "The browser can play through a media without buffering", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_oncanplaythrough.asp" },
  { name: "change", category: "Event", description: "The content of a form element has changed", supported: "<input>, <select>, <textarea>", reference: "https://www.w3schools.com/jsref/event_onchange.asp" },
  { name: "click", category: "MouseEvent", description: "An element is clicked on", supported: "All clickable elements", reference: "https://www.w3schools.com/jsref/event_onclick.asp" },
  { name: "contextmenu", category: "MouseEvent", description: "Right-click context menu opens", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_oncontextmenu.asp" },
  { name: "copy", category: "ClipboardEvent", description: "Content is copied", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_oncopy.asp" },
  { name: "cut", category: "ClipboardEvent", description: "Content is cut", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_oncut.asp" },
  { name: "dblclick", category: "MouseEvent", description: "Double-click", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_ondblclick.asp" },
  { name: "drag", category: "DragEvent", description: "Dragging an element", supported: "draggable elements", reference: "https://www.w3schools.com/jsref/event_ondrag.asp" },
  { name: "dragend", category: "DragEvent", description: "Dragging ended", supported: "draggable elements", reference: "https://www.w3schools.com/jsref/event_ondragend.asp" },
  { name: "dragenter", category: "DragEvent", description: "Dragged enters drop target", supported: "drop targets", reference: "https://www.w3schools.com/jsref/event_ondragenter.asp" },
  { name: "dragleave", category: "DragEvent", description: "Dragged leaves drop target", supported: "drop targets", reference: "https://www.w3schools.com/jsref/event_ondragleave.asp" },
  { name: "dragover", category: "DragEvent", description: "Dragged over target", supported: "drop targets", reference: "https://www.w3schools.com/jsref/event_ondragover.asp" },
  { name: "dragstart", category: "DragEvent", description: "Dragging started", supported: "draggable elements", reference: "https://www.w3schools.com/jsref/event_ondragstart.asp" },
  { name: "drop", category: "DragEvent", description: "Dropped on target", supported: "drop targets", reference: "https://www.w3schools.com/jsref/event_ondrop.asp" },
  { name: "durationchange", category: "Event", description: "Media duration changed", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_ondurationchange.asp" },
  { name: "ended", category: "Event", description: "Media ended", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onended.asp" },
  { name: "error", category: "Event", description: "Error occurred", supported: "Most elements", reference: "https://www.w3schools.com/jsref/event_onerror.asp" },
  { name: "focus", category: "FocusEvent", description: "Element gets focus", supported: "Inputs", reference: "https://www.w3schools.com/jsref/event_onfocus.asp" },
  { name: "focusin", category: "FocusEvent", description: "Element is about to get focus", supported: "Inputs", reference: "https://www.w3schools.com/jsref/event_onfocusin.asp" },
  { name: "focusout", category: "FocusEvent", description: "Element about to lose focus", supported: "Inputs", reference: "https://www.w3schools.com/jsref/event_onfocusout.asp" },
  { name: "fullscreenchange", category: "Event", description: "Fullscreen changed", supported: "Fullscreen API elements", reference: "https://www.w3schools.com/jsref/event_onfullscreenchange.asp" },
  { name: "fullscreenerror", category: "Event", description: "Fullscreen failed", supported: "Fullscreen API elements", reference: "https://www.w3schools.com/jsref/event_onfullscreenerror.asp" },
  { name: "hashchange", category: "HashChangeEvent", description: "URL hash changed", supported: "window", reference: "https://www.w3schools.com/jsref/event_onhashchange.asp" },
  { name: "input", category: "InputEvent, Event", description: "User input", supported: "<input>, <textarea>", reference: "https://www.w3schools.com/jsref/event_oninput.asp" },
  { name: "invalid", category: "Event", description: "Invalid field", supported: "Forms", reference: "https://www.w3schools.com/jsref/event_oninvalid.asp" },
  { name: "keydown", category: "KeyboardEvent", description: "Key down", supported: "window, inputs", reference: "https://www.w3schools.com/jsref/event_onkeydown.asp" },
  { name: "keypress", category: "KeyboardEvent", description: "Key pressed", supported: "window, inputs", reference: "https://www.w3schools.com/jsref/event_onkeypress.asp" },
  { name: "keyup", category: "KeyboardEvent", description: "Key released", supported: "window, inputs", reference: "https://www.w3schools.com/jsref/event_onkeyup.asp" },
  { name: "load", category: "UiEvent, Event", description: "Object loaded", supported: "body, img, script", reference: "https://www.w3schools.com/jsref/event_onload.asp" },
  { name: "loadeddata", category: "Event", description: "Media data loaded", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onloadeddata.asp" },
  { name: "loadedmetadata", category: "Event", description: "Metadata loaded", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onloadedmetadata.asp" },
  { name: "loadstart", category: "ProgressEvent", description: "Browser starts loading media", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onloadstart.asp" },
  { name: "message", category: "Event", description: "Message received", supported: "window, workers", reference: "https://www.w3schools.com/jsref/event_onmessage.asp" },
  { name: "mousedown", category: "MouseEvent", description: "Mouse down", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmousedown.asp" },
  { name: "mouseenter", category: "MouseEvent", description: "Mouse enters element", supported: "All elements", reference: "https://www.w3schools.com/jsref/dom_obj_event.asp" },
  { name: "mouseleave", category: "MouseEvent", description: "Mouse leaves element", supported: "All elements", reference: "https://www.w3schools.com/jsref/dom_obj_event.asp" },
  { name: "mousemove", category: "MouseEvent", description: "Mouse moves", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmousemove.asp" },
  { name: "mouseover", category: "MouseEvent", description: "Mouse over element", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmouseover.asp" },
  { name: "mouseout", category: "MouseEvent", description: "Mouse out of element", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmouseout.asp" },
  { name: "mouseup", category: "MouseEvent", description: "Mouse up", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmouseup.asp" },
  { name: "mousewheel", category: "WheelEvent", description: "Mouse wheel moved", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onmousewheel.asp" },
  { name: "offline", category: "Event", description: "Browser offline", supported: "window", reference: "https://www.w3schools.com/jsref/event_onoffline.asp" },
  { name: "online", category: "Event", description: "Browser online", supported: "window", reference: "https://www.w3schools.com/jsref/event_ononline.asp" },
  { name: "open", category: "Event", description: "SSE connection opened", supported: "EventSource", reference: "https://www.w3schools.com/jsref/eventsource_onopen.asp" },
  { name: "pagehide", category: "PageTransitionEvent", description: "User leaves page", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onpagehide.asp" },
  { name: "pageshow", category: "PageTransitionEvent", description: "User enters page", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onpageshow.asp" },
  { name: "paste", category: "ClipboardEvent", description: "Content pasted", supported: "Form elements", reference: "https://www.w3schools.com/jsref/event_onpaste.asp" },
  { name: "pause", category: "Event", description: "Media paused", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onpause.asp" },
  { name: "play", category: "Event", description: "Media started playing", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onplay.asp" },
  { name: "playing", category: "Event", description: "Media resumed", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onplaying.asp" },
  { name: "popstate", category: "PopStateEvent", description: "History changed", supported: "window", reference: "https://www.w3schools.com/jsref/event_onpopstate.asp" },
  { name: "progress", category: "Event", description: "Downloading data", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onprogress.asp" },
  { name: "ratechange", category: "Event", description: "Playback speed changed", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onratechange.asp" },
  { name: "resize", category: "UiEvent, Event", description: "Document resized", supported: "window", reference: "https://www.w3schools.com/jsref/event_onresize.asp" },
  { name: "reset", category: "Event", description: "Form reset", supported: "<form>", reference: "https://www.w3schools.com/jsref/event_onreset.asp" },
  { name: "scroll", category: "UiEvent, Event", description: "Scrolling element", supported: "All scrollable elements", reference: "https://www.w3schools.com/jsref/event_onscroll.asp" },
  { name: "search", category: "Event", description: "Search input changed", supported: "<input type='search'>", reference: "https://www.w3schools.com/jsref/event_onsearch.asp" },
  { name: "seeked", category: "Event", description: "Seek finished", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onseeked.asp" },
  { name: "seeking", category: "Event", description: "Seeking started", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onseeking.asp" },
  { name: "select", category: "UiEvent, Event", description: "Text selected", supported: "<input>, <textarea>", reference: "https://www.w3schools.com/jsref/event_onselect.asp" },
  { name: "show", category: "Event", description: "<menu> is shown", supported: "<menu>", reference: "https://www.w3schools.com/jsref/event_onshow.asp" },
  { name: "stalled", category: "Event", description: "Media stalled", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onstalled.asp" },
  { name: "storage", category: "StorageEvent", description: "Storage updated", supported: "Web Storage API", reference: "https://www.w3schools.com/jsref/event_onstorage.asp" },
  { name: "submit", category: "Event", description: "Form submitted", supported: "<form>", reference: "https://www.w3schools.com/jsref/event_onsubmit.asp" },
  { name: "suspend", category: "Event", description: "Media suspend", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onsuspend.asp" },
  { name: "timeupdate", category: "Event", description: "Playback time changed", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_ontimeupdate.asp" },
  { name: "toggle", category: "Event", description: "<details> opened/closed", supported: "<details>", reference: "https://www.w3schools.com/jsref/event_ontoggle.asp" },
  { name: "touchcancel", category: "TouchEvent", description: "Touch canceled", supported: "Touch devices", reference: "https://www.w3schools.com/jsref/event_ontouchcancel.asp" },
  { name: "touchend", category: "TouchEvent", description: "Finger removed", supported: "Touch devices", reference: "https://www.w3schools.com/jsref/event_ontouchend.asp" },
  { name: "touchmove", category: "TouchEvent", description: "Finger moved", supported: "Touch devices", reference: "https://www.w3schools.com/jsref/event_ontouchmove.asp" },
  { name: "touchstart", category: "TouchEvent", description: "Finger placed", supported: "Touch devices", reference: "https://www.w3schools.com/jsref/event_ontouchstart.asp" },
  { name: "transitionend", category: "TransitionEvent", description: "CSS transition completed", supported: "CSS transition elements", reference: "https://www.w3schools.com/jsref/event_transitionend.asp" },
  { name: "unload", category: "UiEvent, Event", description: "Page unloaded", supported: "<body>", reference: "https://www.w3schools.com/jsref/event_onunload.asp" },
  { name: "volumechange", category: "Event", description: "Volume changed", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onvolumechange.asp" },
  { name: "waiting", category: "Event", description: "Media waiting for data", supported: "<audio>, <video>", reference: "https://www.w3schools.com/jsref/event_onwaiting.asp" },
  { name: "wheel", category: "WheelEvent", description: "Mouse wheel moves", supported: "All elements", reference: "https://www.w3schools.com/jsref/event_onwheel.asp" }
];


document.addEventListener("DOMContentLoaded", function () {
  const searchInput   = document.getElementById("eventsSearch");
  const categorySelect = document.getElementById("eventsCategory");
  const tableBody     = document.getElementById("eventsTableBody");
  const countLabel    = document.getElementById("eventsCount");

  const categorySet = new Set();
  eventsData.forEach(ev => {
    ev.category.split(",").forEach(part => categorySet.add(part.trim()));
  });

  const categories = Array.from(categorySet).sort();
  categorySelect.innerHTML =
    `<option value="all">All Categories</option>` +
    categories.map(c => `<option value="${c}">${c}</option>`).join("");

  function renderEvents(list) {
    tableBody.innerHTML = "";

    list.forEach(ev => {
      const tr = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = ev.name;

      const tdCategory = document.createElement("td");
      tdCategory.textContent = ev.category;

      const tdDesc = document.createElement("td");
      tdDesc.textContent = ev.description;

      const tdTags = document.createElement("td");
      tdTags.textContent = ev.supported;

      const tdRef = document.createElement("td");
      const link = document.createElement("a");
      link.href = ev.reference;
      link.target = "_blank";
      link.textContent = "W3Schools ↗";
      tdRef.appendChild(link);

      tr.appendChild(tdName);
      tr.appendChild(tdCategory);
      tr.appendChild(tdDesc);
      tr.appendChild(tdTags);
      tr.appendChild(tdRef);

      tableBody.appendChild(tr);
    });
  }

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;

    const filtered = eventsData.filter(ev => {
      const matchesCategory =
        category === "all" ||
        ev.category.toLowerCase().includes(category.toLowerCase());

      const matchesSearch =
        term === "" ||
        (`${ev.name} ${ev.category} ${ev.description} ${ev.supported}`)
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesSearch;
    });

    countLabel.textContent =
      (category === "all" && term === "")
        ? `Showing all ${filtered.length} events`
        : `Showing ${filtered.length} events`;

    renderEvents(filtered);
  }

  searchInput.addEventListener("input", applyFilters);
  categorySelect.addEventListener("change", applyFilters);

  applyFilters();
});
