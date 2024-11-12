<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial10title') }}</h2>
                <p>{{ $t('message.trainingmaterial10text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn" @click="handleFile($t('message.trainingmaterial10download1'))">{{ $t('message.btntrainingmaterial10download1') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial10download2'))">{{ $t('message.btntrainingmaterial10download2') }}</button>

            </div>
            
        </div>
    
    </div>
</template>

<style scoped>
</style>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const handleFile = (fileName) => {
const fileExtension = fileName.split('.').pop().toLowerCase();
const fileUrl = `/archives/training for tutors and trainers in WBL/${fileName}`;
if (fileExtension === 'pdf') {
  // Abrir PDFs en una nueva pestaña
  window.open(fileUrl, '_blank');
} else {
  // Descargar otros tipos de archivos
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}
};
</script>