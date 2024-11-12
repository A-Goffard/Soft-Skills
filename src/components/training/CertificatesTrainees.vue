<template>
    <div>
        <div class="comp-card">
            <div class="comp-text">
                <h2>{{ $t('message.trainingmaterial3title') }}</h2>
                <p>{{ $t('message.trainingmaterial3text') }}</p>
            </div>
            
            <div class="comp-downloads">
                <button class="btn" @click="handleFile($t('message.trainingmaterial3download1'))">{{ $t('message.btntrainingmaterial3download1') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial3download2'))">{{ $t('message.btntrainingmaterial3download2') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial3download3'))">{{ $t('message.btntrainingmaterial3download3') }}</button>
                <button class="btn" @click="handleFile($t('message.trainingmaterial3download4'))">{{ $t('message.btntrainingmaterial3download4') }}</button>
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
    const fileUrl = `/archives/Training certificates for trainees/${fileName}`;
    // Check if the URL is correct and file exists
    console.log('Attempting to download:', fileUrl);
    
    if (fileExtension === 'pdf') {
        // Open PDFs in a new tab
        window.open(fileUrl, '_blank');
    } else {
        // Download other types of files
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    }
};
</script>