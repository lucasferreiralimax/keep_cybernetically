function resize({ target }) {
  if(target.value) {
    target.style.height = "1px";
	  target.style.height = (+target.scrollHeight)+"px";
  } else {
    target.removeAttribute('style')
  }
}

export function text_area_resize(el) {
	resize({ target: el });
	el.addEventListener('input', resize);
	return { destroy: () => el.removeEventListener('input', resize)	}
}
