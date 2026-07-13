import { motion } from 'framer-motion'
import './PromiseSection.css'

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <motion.div
        className="promise-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="section-tag">وعد</span>
        <p className="promise-text">
          أوعدك إني هفضل دايماً زي ما عرفتيني، اللي بيحبك ومش قادر يعيش من غيرك،
          وإني أفضل جنبك وسندك وضهرك وأمانك، والكتف اللي تميلي عليه.
        </p>
      </motion.div>

      <motion.div
        className="poem-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="section-tag">طول العمر</span>
        <p className="poem-text">
          سأظل أحبك كما لم يُحبّ عاشقٌ من قبل<br />
          وسأظل أراك وطني وملاذي ونبض قلبي الهارب من الضياع ♥<br /><br />
          إلى أن يشيخ الضوء في عيون النجوم<br />
          وتهجر الطيور أعشاشها في ربيع الحنين<br />
          إلى أن تنسى البحار ملوحتها<br />
          ويصير الليل بلا قمرٍ ولا أنين<br /><br />
          سأبقى أنتمي إليك كأنك وطني<br />
          وأتنفسك شوقًا لا يعرف السكون ♥<br /><br />
          إلى أن تتعب الريح من السفر<br />
          وتنطفئ في صدري كل أوجاع المطر<br />
          إلى أن تتوقف الساعات عن الدوران<br />
          وتفقد الأرض شهيّتها للدوران<br /><br />
          سأبقى أحبك بصوتٍ لا يسمعه سواك<br />
          وأكتفي بك وكأنك آخر ما تبقى من الحياة ♥♥♥
        </p>
      </motion.div>
    </section>
  )
}
