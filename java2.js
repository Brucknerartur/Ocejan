function showMore(id,) {
    let style = document.getElementById(id).style;
    let show = style.display !== 'block';
    style.display = show ? 'block' : 'none';
}