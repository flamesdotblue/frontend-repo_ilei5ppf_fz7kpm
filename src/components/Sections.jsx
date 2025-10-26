import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bell, User, Shield, Image, CheckCircle } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function PostCard({ post, onLike, onComment }) {
  const [comment, setComment] = useState('');

  return (
    <article className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">{post.author}</div>
          <div className="text-xs text-slate-500">{post.time}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{post.content}</p>
      {post.image && (
        <div className="mt-4 overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
          <img src={post.image} alt="post media" className="w-full h-48 object-cover" />
        </div>
      )}
      <div className="mt-4 flex items-center gap-4 text-sm">
        <button onClick={onLike} className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-fuchsia-500">
          <Heart size={16} className={post.liked ? 'fill-fuchsia-500 text-fuchsia-500' : ''} /> {post.likes}
        </button>
        <button className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
          <MessageCircle size={16} /> {post.comments.length}
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!comment.trim()) return;
          onComment(comment.trim());
          setComment('');
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 ring-cyan-400/40"
        />
        <button type="submit" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white text-xs">
          <Send size={14} /> Send
        </button>
      </form>
      {post.comments.length > 0 && (
        <div className="mt-3 grid gap-2">
          {post.comments.map((c, i) => (
            <div key={i} className="text-xs text-slate-600 dark:text-slate-300">
              <span className="font-medium text-slate-800 dark:text-slate-200">{c.author}</span> {c.text}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Sections() {
  const initialPosts = useMemo(
    () => [
      {
        id: 1,
        author: 'Ava',
        time: '2m ago',
        content: 'Launching our new real-time notifications today — reactions feel instant! ⚡️',
        image: '',
        likes: 24,
        liked: false,
        comments: [
          { author: 'Liam', text: 'Let’s go! 🔥' },
          { author: 'Mia', text: 'So smooth!' },
        ],
      },
      {
        id: 2,
        author: 'Noah',
        time: '15m ago',
        content: 'Dark mode + vibrant gradients = chef’s kiss.',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        likes: 72,
        liked: false,
        comments: [],
      },
      {
        id: 3,
        author: 'Zoe',
        time: '1h ago',
        content: 'Designing profile badges with iridescent effects and a glowing checkmark.',
        image: '',
        likes: 12,
        liked: true,
        comments: [{ author: 'Kai', text: 'Verified vibes ✨' }],
      },
    ],
    []
  );

  const [posts, setPosts] = useState(initialPosts);
  const [ticks, setTicks] = useState(0);

  // Simulate real-time notifications ticker
  useEffect(() => {
    const t = setInterval(() => setTicks((n) => n + 1), 4000);
    return () => clearInterval(t);
  }, []);

  // Derive a fun notification message periodically
  const notification = useMemo(() => {
    const list = [
      'New like on your post',
      'New comment from Alex',
      'Ava started following you',
      'Noah mentioned you in a post',
      'Your profile was verified',
    ];
    return list[ticks % list.length];
  }, [ticks]);

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  const commentPost = (id, text) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, { author: 'You', text }] } : p
      )
    );
  };

  return (
    <div className="relative">
      {/* Feed */}
      <section id="feed" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-2xl" />
        </div>
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Feed</motion.h2>
        <motion.p {...fadeUp} className="mt-2 text-slate-700 dark:text-slate-300">Posts, likes, and comments — all in one place.</motion.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <PostCard
                post={p}
                onLike={() => likePost(p.id)}
                onComment={(text) => commentPost(p.id, text)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profiles */}
      <section id="profiles" className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Profiles</motion.h2>
        <p className="mt-2 text-slate-700 dark:text-slate-300">Clean identity, customizable handles, and verified badges.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Ava', badge: 'Creator', verified: true },
            { name: 'Noah', badge: 'Pro', verified: false },
            { name: 'Zoe', badge: 'Designer', verified: true },
          ].map((u) => (
            <div key={u.name} className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center text-white">
                  <User size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    {u.name}
                    {u.verified && (
                      <span className="inline-flex items-center gap-1 text-emerald-400 text-xs">
                        <CheckCircle size={14} /> Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500">{u.badge}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">Building a community around meaningful conversations.</div>
              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">1.2k followers</span>
                <span className="px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">324 following</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications (real-time demo) */}
      <section id="notifications" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Notifications</motion.h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Bell size={18} className="text-cyan-400" />
              Real-time updates
            </div>
            <div className="mt-4 h-36 rounded-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-slate-50/50 to-white/60 dark:from-white/5 dark:to-white/10 p-4 overflow-hidden">
              <motion.div
                key={notification}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-sm text-slate-800 dark:text-slate-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {notification}
              </motion.div>
              <div className="mt-3 text-xs text-slate-500">This demo cycles messages every few seconds.</div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <div className="text-sm font-medium text-slate-900 dark:text-white">Platform features</div>
            <ul className="mt-4 grid gap-3 text-sm">
              <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Shield size={16} className="text-emerald-400" /> Privacy-first profiles</li>
              <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Image size={16} className="text-fuchsia-400" /> Rich media posts</li>
              <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Heart size={16} className="text-pink-500" /> Reactions & mentions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
