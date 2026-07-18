<script setup lang="ts">

import { NButton, NGi, NGrid, NInput, NSelect, NTabPane, NTabs, NUpload, type UploadFileInfo } from 'naive-ui';

import FontControls from './font-controls.vue'; // Separate component for weight/style/fallback
import { useITStorage } from '@/composable/queryParams';

const defaultText = 'The quick brown fox jumps over the lazy dog.';
const sampleText = useITStorage('font-comparer:txt', defaultText);
const activeTab = useITStorage('font-comparer:tab', 'fontname');

const fontOptions = [
  { label: "Arial", value: 'Arial' },
  { label: "Verdana", value: 'Verdana' },
  { label: "Helvetica", value: 'Helvetica' },
  { label: "Tahoma", value: 'Tahoma' },
  { label: "Trebuchet MS", value: 'Trebuchet MS' },
  { label: "Times New Roman", value: 'Times New Roman' },
  { label: "Georgia", value: 'Georgia' },
  { label: "Garamond", value: 'Garamond' },
  { label: "Courier New", value: 'Courier New' },
  { label: "Lucida Console", value: 'Lucida Console' },
  { label: "Lucida Sans Unicode", value: 'Lucida Sans Unicode' },
  { label: "Palatino Linotype", value: 'Palatino Linotype' },
  { label: "Segoe UI", value: 'Segoe UI' },
  { label: "Impact", value: 'Impact' },
  { label: "Comic Sans MS", value: 'Comic Sans MS' },
  { label: "Century Gothic", value: 'Century Gothic' },
  { label: "Franklin Gothic Medium", value: 'Franklin Gothic Medium' },
  { label: "Candara", value: 'Candara' },
  { label: "Calibri", value: 'Calibri' },
  { label: "Cambria", value: 'Cambria' },
  { label: "Constantia", value: 'Constantia' },
  { label: "Corbel", value: 'Corbel' },
  { label: "Book Antiqua", value: 'Book Antiqua' },
  { label: "Monaco", value: 'Monaco' },
  { label: "Andale Mono", value: 'Andale Mono' },
  { label: "Optima", value: 'Optima' },
  { label: "Futura", value: 'Futura' },
  { label: "Rockwell", value: 'Rockwell' },
  { label: "Baskerville", value: 'Baskerville' },
  { label: "Didot", value: 'Didot' },
  { label: "Geneva", value: 'Geneva' },
  { label: "Symbol", value: 'Symbol' },
  { label: "Webdings", value: 'Webdings' },
  { label: "Wingdings", value: 'Wingdings' },
  { label: "Roboto", value: 'Roboto' },
  { label: "Open Sans", value: 'Open Sans' },
  { label: "Lato", value: 'Lato' },
  { label: "Montserrat", value: 'Montserrat' },
  { label: "Oswald", value: 'Oswald' },
  { label: "Raleway", value: 'Raleway' },
  { label: "Poppins", value: 'Poppins' },
  { label: "Merriweather", value: 'Merriweather' },
  { label: "Inter", value: 'Inter' },
  { label: "Noto Sans", value: 'Noto Sans' },
  { label: "Playfair Display", value: 'Playfair Display' },
  { label: "Source Sans Pro", value: 'Source Sans Pro' },
  { label: "Ubuntu", value: 'Ubuntu' },
  { label: "Nunito", value: 'Nunito' },
  { label: "PT Sans", value: 'PT Sans' },
  { label: "Quicksand", value: 'Quicksand' },
  { label: "Work Sans", value: 'Work Sans' },
  { label: "Rubik", value: 'Rubik' },
  { label: "DM Sans", value: 'DM Sans' },
];

interface FontData {
  value: string
  url: string
  css: string
  cssUrl: string
  dynamicName: string
  weight: string
  style: string
  fallback: string
}

const fontA = useITStorage('font-comparer:a', {
  value: 'Arial',
  url: '',
  css: '',
  cssUrl: '',
  dynamicName: '',
  weight: 'normal',
  style: 'normal',
  fallback: 'sans-serif',
});

const fontB = useITStorage('font-comparer:b', {
  value: 'Georgia',
  url: '',
  css: '',
  cssUrl: '',
  dynamicName: '',
  weight: 'normal',
  style: 'normal',
  fallback: 'serif',
});

function fontStyle(font: FontData) {
  return {
    fontFamily: `${font.dynamicName || font.value}, ${font.fallback}`,
    fontWeight: font.weight,
    fontStyle: font.style,
    fontSize: '20px',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginTop: '12px',
    minHeight: '80px',
  };
}

function injectFontCSS(cssText: string) {
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.textContent = cssText;
  document.head.appendChild(styleTag);
}

async function loadCSSFromURL(url: string) {
  try {
    const response = await fetch(url);
    const cssText = await response.text();
    const styleTag = document.createElement('style');
    styleTag.textContent = cssText;
    document.head.appendChild(styleTag);
  }
  catch (error) {
    console.error('Failed to load CSS:', error);
  }
}

function loadFontFromURL(url: string, index: number) {
  const fontName = `CustomFont${index}`;
  const font = new FontFace(fontName, `url(${url})`);
  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
    if (index === 0) {
      fontA.value.dynamicName = fontName;
    }
    else { fontB.value.dynamicName = fontName; }
  }).catch(console.error);
}

function handleFontUpload(file: UploadFileInfo, index: number) {
  const reader = new FileReader();
  reader.onload = () => {
    const fontName = `UploadedFont${index}`;
    const font = new FontFace(fontName, reader.result as ArrayBuffer);
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      if (index === 0) {
        fontA.value.dynamicName = fontName;
      }
      else { fontB.value.dynamicName = fontName; }
    }).catch(console.error);
  };
  reader.readAsArrayBuffer(file!.file!);
}

interface UploadEvents {
  file: UploadFileInfo
}
</script>

<template>
  <div>
    <details>
      <summary />
      <c-input-text v-model:value="sampleText" multiline rows="3" placeholder="Enter sample text..." mb-2 />
    </details>

    <NTabs v-model:value="activeTab" type="segment">
      <NTabPane name="fontname" tab="By Font Name">
        <NGrid :cols="2" :x-gap="24">
          <NGi v-for="(font, index) in [fontA, fontB]" :key="index">
            <NSelect
              v-model:value="font.value"
              :options="fontOptions"
              placeholder="Select font name"
              mb-2
            />
            <FontControls :font="font" />
            <div :style="fontStyle(font)" class="font-preview">
              {{ sampleText }}
            </div>
          </NGi>
        </NGrid>
      </NTabPane>

      <NTabPane name="fonturl" tab="By Font URL">
        <NGrid :cols="2" :x-gap="24">
          <NGi v-for="(font, index) in [fontA, fontB]" :key="index">
            <NInput
              v-model:value="font.url"
              placeholder="Enter font URL"
              mb-2
              @blur="loadFontFromURL(font.url, index)"
            />
            <FontControls :font="font" />
            <div :style="fontStyle(font)" class="font-preview">
              {{ sampleText }}
            </div>
          </NGi>
        </NGrid>
      </NTabPane>

      <NTabPane name="fontfile" tab="By Font File">
        <NGrid :cols="2" :x-gap="24">
          <NGi v-for="(font, index) in [fontA, fontB]" :key="index">
            <NUpload
              :show-file-list="false"
              accept=".ttf,.otf,.woff,.woff2"
              :change="(e: UploadEvents) => handleFontUpload(e.file, index)"
              mb-2
            >
              <NButton>Upload Font File</NButton>
            </NUpload>
            <FontControls :font="font" />
            <div :style="fontStyle(font)" class="font-preview">
              {{ sampleText }}
            </div>
          </NGi>
        </NGrid>
      </NTabPane>
      <NTabPane name="inlinecss" tab="By Inline CSS">
        <NGrid :cols="2" :x-gap="24">
          <NGi v-for="(font, index) in [fontA, fontB]" :key="index">
            <NInput
              v-model:value="font.css"
              type="textarea"
              placeholder="Paste {'@'}font-face CSS here"
              :autosize="{ minRows: 4, maxRows: 10 }"
              mb-1
              @blur="injectFontCSS(font.css)"
            />
            <NInput
              v-model:value="font.dynamicName"
              placeholder="Font-family name from CSS"
              mb-2
            />
            <FontControls :font="font" />
            <div :style="fontStyle(font)" class="font-preview">
              {{ sampleText }}
            </div>
          </NGi>
        </NGrid>
      </NTabPane>
      <NTabPane name="cssurl" tab="By CSS URL">
        <NGrid :cols="2" :x-gap="24">
          <NGi v-for="(font, index) in [fontA, fontB]" :key="index">
            <NInput
              v-model:value="font.cssUrl"
              placeholder="Enter CSS URL (e.g. https://example.com/fonts.css)"
              mb-1
              @blur="loadCSSFromURL(font.cssUrl)"
            />
            <NInput
              v-model:value="font.dynamicName"
              placeholder="Font-family name from imported CSS"
              mb-2
            />
            <FontControls :font="font" />
            <div :style="fontStyle(font)" class="font-preview">
              {{ sampleText }}
            </div>
          </NGi>
        </NGrid>
      </NTabPane>
    </NTabs>
  </div>
</template>
