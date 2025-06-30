var posts=["2025/06/30/这是一篇新的博文测试1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };