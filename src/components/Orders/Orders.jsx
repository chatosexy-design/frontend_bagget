import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingBag, MapPin, Phone, Hash, DollarSign, Trash2, LogOut, Loader2, Image as ImageIcon } from 'lucide-react';
import { orderService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '', direccion: '', telefono: '', cantidad: 1, precio_final: 0, comentario: '', imagen_producto: ''
  });
  const { user, logout } = useAuth();

  const fetchOrders = async () => {
    try {
      const data = await orderService.getAll();
      setOrders(data);
    } catch (err) {
      console.error('Error al cargar pedidos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await orderService.create(formData);
      setFormData({ nombre: '', direccion: '', telefono: '', cantidad: 1, precio_final: 0, comentario: '', imagen_producto: '' });
      setShowForm(false);
      fetchOrders();
    } catch (err) {
      alert(err.response?.data?.error || 'Error al crear pedido');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este pedido de la brasa?')) {
      try {
        await orderService.delete(id);
        fetchOrders();
      } catch (err) {
        alert('Error al eliminar');
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-white p-6 font-sans">
      <nav className="flex justify-between items-center mb-10 bg-stone-800/50 p-4 rounded-2xl border border-stone-700 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-orange-600 p-2 rounded-lg">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Leños <span className="text-orange-500 text-sm font-normal">Gestión</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-stone-400 font-medium">Hola, <span className="text-white font-bold">{user.username}</span></span>
          <button onClick={logout} className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors border border-red-500/20">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black italic uppercase tracking-wider text-orange-100 flex items-center gap-3">
            Pedidos en Brasa <span className="bg-orange-600/20 text-orange-500 text-xs px-2 py-1 rounded-full not-italic">{orders.length}</span>
          </h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-orange-900/40 transition-all active:scale-95"
          >
            {showForm ? 'Cerrar' : <><Plus className="w-5 h-5" /> Nuevo Pedido</>}
          </button>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <form onSubmit={handleSubmit} className="bg-stone-800 border border-stone-700 p-8 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input placeholder="Nombre del cliente" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} required />
                  <input placeholder="Dirección" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.direccion} onChange={e => setFormData({...formData, direccion: e.target.value})} required />
                  <input placeholder="Teléfono (10 dígitos)" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} required />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" placeholder="Cantidad" className="bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.cantidad} onChange={e => setFormData({...formData, cantidad: e.target.value})} required />
                    <input type="number" placeholder="Precio Final" className="bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.precio_final} onChange={e => setFormData({...formData, precio_final: e.target.value})} required />
                  </div>
                  <input placeholder="URL Imagen en movimiento (GIF/MP4)" className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" value={formData.imagen_producto} onChange={e => setFormData({...formData, imagen_producto: e.target.value})} />
                  <textarea placeholder="Comentario extra..." className="w-full bg-stone-900 border border-stone-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 h-24" value={formData.comentario} onChange={e => setFormData({...formData, comentario: e.target.value})} />
                </div>
                <button type="submit" className="md:col-span-2 bg-orange-600 py-4 rounded-xl font-black text-xl hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/40">ENCENDER FUEGO (CREAR)</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-12 h-12 text-orange-600 animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((order, index) => (
              <motion.div 
                key={order._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-800/40 border border-stone-700/50 rounded-3xl overflow-hidden group hover:border-orange-500/30 transition-all hover:shadow-2xl hover:shadow-orange-900/10"
              >
                <div className="h-48 relative overflow-hidden bg-stone-900">
                  <img src={order.imagen_producto || 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXZueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueXpueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKMGpx4ZqhYV6Y8/giphy.gif'} 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                       alt="Producto" />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white font-black px-4 py-2 rounded-xl shadow-lg">${order.precio_final}</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold truncate">{order.nombre}</h3>
                  <div className="space-y-2 text-stone-400 text-sm">
                    <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-orange-500" /> {order.direccion}</div>
                    <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-orange-500" /> {order.telefono}</div>
                    <div className="flex items-center gap-3"><Hash className="w-4 h-4 text-orange-500" /> Cantidad: {order.cantidad}</div>
                  </div>
                  {order.comentario && <p className="bg-stone-900/50 p-3 rounded-lg text-xs italic text-stone-500">"{order.comentario}"</p>}
                  <button onClick={() => handleDelete(order._id)} className="w-full py-3 flex items-center justify-center gap-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-red-500/10 group-hover:border-red-500/30">
                    <Trash2 className="w-4 h-4" /> Eliminar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
