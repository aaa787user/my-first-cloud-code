index.js
export default {
  async fetch(request, env, ctx) {
    return new Response('哈喽！我的第一个Cloud Code部署成功啦！', {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};