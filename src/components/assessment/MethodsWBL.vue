<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.assessment7title') }}</h2>
                <p>{{ $t('message.assessment7text') }}</p>
        
            </div>
            
            <div class="comp-downloads">
                <button class="btn" @click="handleFile($t('message.assessment7download1'))">{{ $t('message.btnassessment7download1') }}</button>
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
const fileUrl = `/archives/Placement and assessment methods for soft skills in WBL situations/${fileName}`;
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