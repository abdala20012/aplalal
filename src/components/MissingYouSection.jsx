import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'يعني حياتي وحشة من غيرك',
  'يعني الدنيا فاضية حواليا من غيرك',
  'يعني روحي وإحساسي ومشاعري معاكي',
  'يعني عقلي مش بيبطل تفكير فيكي',
  'يعني في بعدك مش بلاقي نفسي',
  'يعني انتي كل الدنيا عندي',
  'يعني زهقان وانتي مش معايا',
  'يعني انتي ونسي وأهلي وناسي',
  'يعني انتي اول حد بفكر فيه اول ما اصحى من النوم، وأخر حد بفكر فيه قبل ما انام، وأكتر حد بفكر فيه طول اليوم',
  'يعني صوتك بالنسبالي هرمون سعادة، لما يغيب ساعة منسوب السعادة بيقل، وبيرتفع تاني اول ما اسمعك بتتكلمي',
  'يعني كأني غريب في الدنيا من غيرك، وانتي ليا وطن وأهل',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتيني</span>
        <h2 className="section-title">دي برضو مش كلمة بقولهالك وخلاص</h2>
        <p className="section-subtitle">
          دي ليها معاني كتييييييير جداً.. عدي معايا ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتيني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        فمن الأخر كدة.. وحشتيني، وحشتيني، وحشتيني 😂♥♥
      </motion.p>
    </section>
  )
}
