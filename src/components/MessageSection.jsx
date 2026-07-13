import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">عبلة ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          يمكن الكلمات متكفيش توصف اللي جوايا، لكن كان لازم أعمل المكان ده
          علشان يبقى شاهد على حبي ليكي.<br /><br />
          من يوم 12/6/2022، وأنا كل يوم باكتشف سبب جديد يخليني أحبك أكتر.
          ضحكتك بتفرحني، وكلامك بيطمني، ووجودك بيخلي أي يوم صعب يعدي.<br /><br />
          لو رجع بيا الزمن ألف مرة، كل مرة هختارك انتي من غير تردد.<br /><br />
          وعد مني ليكي... هفضل أحترمك، وأقدرك، وأكون جنبك في الحلو قبل
          الوحش، وأفضل أدعي إن ربنا يجمعنا في الخير ويديم وجودك في حياتي.
        </motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا عبلة... حب أكبر من أي كلام، وأتمنى أفضل أشوف ضحكتك طول العمر ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
