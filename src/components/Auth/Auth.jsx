import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Loader2 } from 'lucide-react';
import { authService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login: contextLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isLogin) {
        const { usuario, token } = await authService.login(formData);
        contextLogin(usuario, token);
      } else {
        await authService.signup(formData);
        setIsLogin(true);
        setError('¡Registro exitoso! Por favor inicia sesión.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      {/* Fondo con imagen rústica de leños */}
      <div 
        className="absolute inset-0 z-0 opacity-20 grayscale"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=1470&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-full max-w-md relative z-10 shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-orange-600 p-4 rounded-full shadow-lg">
            {isLogin ? <LogIn className="text-white w-8 h-8" /> : <UserPlus className="text-white w-8 h-8" />}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {isLogin ? 'Leños' : 'Únete a Leños'}
        </h2>
        <p className="text-orange-400 text-center mb-8">
          {isLogin ? 'Bienvenido de nuevo a la parrilla' : 'Crea tu cuenta rústica'}
        </p>

        {error && (
          <div className={`p-3 rounded-lg text-sm text-center mb-6 ${error.includes('exitoso') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Usuario</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="Tu nombre de usuario"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-900/40 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : (isLogin ? 'Entrar' : 'Registrarme')}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya eres parte?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-orange-400 font-bold hover:underline"
          >
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
