import { useState } from 'react'
import { motion } from 'framer-motion'
import './GallerySection.css'

// عشان تضيفي صورك: حطي الـ 11 صورة في مجلد public/images
// وسميهم بالظبط: photo1.jpg, photo2.jpg ... لحد photo11.jpg
// مفيش أي تعديل تاني مطلوب في الكود — الموقع هياخدهم تلقائي

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']

function GalleryPhoto({ id, caption, placeholder, index }) {
  const [extIndex, setExtIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (extIndex < EXTENSIONS.length - 1) {
      setExtIndex(extIndex + 1)
    } else {
      setFailed(true)
    }
  }

  return (
    <div className="photo-placeholder">
      {!failed ? (
        <img
          src={`/images/photo${id}.${EXTENSIONS[extIndex]}`}
          alt={caption}
          onError={handleError}
          loading="lazy"
        />
      ) : (
        <span className="placeholder-icon">{placeholder}</span>
      )}
    </div>
  )
}

export default function GallerySection() {
  const placeholders = ['♥', '✦', '☾', '♡', '✿', '★', '❀', '✧', '♥', '☆', '✿']
  const captions = [
    'أول يوم شفتك فيه',
    'اجمل عيون شفتها في حياتي',
    'لحظة ما عمرها هتتنسي',
    'في عينيكي بشوف الدنيا',
    'إنتي حياتي كلها',
    'بحبك مهما حصل',
    'وحشتيني حتى وإحنا مع بعض',
    'أنتي الأمان اللي بدور عليه',
    'يوم من أحلى أيامنا',
    'أجمل صدفة في عمري',
    'وعمرها ما هتتغير.. بحبك',
  ]
  const photos = captions.map((caption, i) => ({
    id: i + 1,
    caption,
    placeholder: placeholders[i],
  }))

  return (
    <section className="gallery-section" id="gallery">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">معرض ذكرياتنا</span>
        <h2 className="section-title">لحظات لا تُنسى</h2>
        <p className="section-subtitle">كل صورة بتحكي قصة حب لوحدها</p>
      </motion.div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="gallery-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <GalleryPhoto {...photo} index={i} />
            <div className="photo-caption">{photo.caption}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
