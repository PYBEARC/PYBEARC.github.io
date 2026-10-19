/* Portfolio analytics: no chat messages or contact details are collected. */
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
gtag('js', new Date());
gtag('config', 'G-Q72GWCVVLX');
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var url;
    try { url = new URL(link.href, window.location.href); } catch (_) { return; }
    if (!/^https?:$/.test(url.protocol)) return;
    var name;
    if (/resume[^/]*\.pdf$/i.test(url.pathname)) name = 'resume_click';
    else if (link.closest('.paperlinks, .paper h3') || /arxiv\.org$|sciencedirect\.com$|ieeexplore\.ieee\.org$/.test(url.hostname)) name = 'paper_click';
    else if (/\/carmen\.html$/.test(url.pathname)) name = 'research_detail_click';
    if (name) gtag('event', name, { link_domain: url.hostname, link_path: url.pathname });
  });
  document.querySelectorAll('video').forEach(function (video, index) {
    var started = false;
    video.addEventListener('play', function () {
      if (started) return;
      started = true;
      gtag('event', 'experiment_video_start', { video_title: video.getAttribute('aria-label') || 'Experiment ' + (index + 1), video_index: index + 1 });
    });
  });
});
