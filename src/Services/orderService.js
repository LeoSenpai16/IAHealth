import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Agregar pedido
export const addOrder = async (order) => {
  await addDoc(collection(db, 'orders'), order);
};

// Traer pedidos
export const getOrders = async (userId) => {
  const snapshot = await getDocs(collection(db, 'orders'));
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(order => order.userId === userId);
};

// Eliminar pedido
export const deleteOrder = async (orderId) => {
  await deleteDoc(doc(db, 'orders', orderId));
};

