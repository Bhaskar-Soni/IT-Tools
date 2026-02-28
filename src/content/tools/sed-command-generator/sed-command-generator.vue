<script setup lang="ts">
const form = ref({
  commandType: 'substitute', // substitute | delete | extract | number
  pattern: '',
  replacement: '',
  delimiter: '/',
  global: true,
  caseInsensitive: false,
  inPlace: false,
  extendedRegex: false,
  suppressPrint: false,
  targetFile: '',
});

const sedCommand = computed(() => {
  const {
    commandType,
    pattern,
    replacement,
    delimiter,
    global,
    caseInsensitive,
    inPlace,
    extendedRegex,
    suppressPrint,
    targetFile,
  } = form.value;

  const options = [
    inPlace ? '-i' : '',
    extendedRegex ? '-E' : '',
    suppressPrint ? '-n' : '',
  ].filter(Boolean).join(' ');

  let expr = '';

  if (commandType === 'substitute') {
    if (!pattern || !replacement) {
      return '';
    }
    const flags = `${global ? 'g' : ''}${caseInsensitive ? 'i' : ''}`;
    expr = `s${delimiter}${pattern}${delimiter}${replacement}${delimiter}${flags}`;
  }
  else if (commandType === 'delete') {
    if (!pattern) {
      return '';
    }
    expr = `/${pattern}/d`;
  }
  else if (commandType === 'extract') {
    if (!pattern) {
      return '';
    }
    expr = `/${pattern}/p`;
  }
  else if (commandType === 'number') {
    expr = '=';
  }

  const file = targetFile || 'yourfile.txt';
  return `sed ${options} '${expr}' ${file}`.trim();
});
</script>

<template>
  <div>
    <n-space justify="center" mb-1 mt-1>
      <n-p>
        For more information about<code>sed</code>command, see<c-link target="_blank" to="/sed-memo">
          Sed Command Cheatsheet
        </c-link>
      </n-p>
    </n-space>

    <n-form :model="form" label-placement="left" label-width="120px" mt-2>
      <n-space justify="center" mb-1 mt-1>
        <n-form-item label="Command Type:">
          <n-radio-group v-model:value="form.commandType" name="commandType">
            <n-radio-button value="substitute">
              Substitute
            </n-radio-button>
            <n-radio-button value="delete">
              Delete
            </n-radio-button>
            <n-radio-button value="extract">
              Extract
            </n-radio-button>
            <n-radio-button value="number">
              Number Lines
            </n-radio-button>
          </n-radio-group>
        </n-form-item>
      </n-space>

      <n-card v-if="form.commandType !== 'number'" title="Search Pattern:">
        <n-input v-model:value="form.pattern" placeholder="e.g., foo" />
        <c-link target="_blank" to="/regex-memo">
          See Regex Cheatsheet
        </c-link>
      </n-card>

      <n-form-item v-if="form.commandType === 'substitute'" label="Replacement:" mt-3>
        <n-input v-model:value="form.replacement" placeholder="e.g., bar" />
      </n-form-item>

      <n-form-item v-if="form.commandType === 'substitute'" label="Delimiter:">
        <n-input v-model:value="form.delimiter" placeholder="e.g., / or #" />
      </n-form-item>

      <n-form-item v-if="form.commandType === 'substitute'" label="Flags:">
        <n-checkbox v-model:checked="form.global">
          Global (g)
        </n-checkbox>
        <n-checkbox v-model:checked="form.caseInsensitive">
          Case Insensitive (i)
        </n-checkbox>
      </n-form-item>

      <n-form-item label="Options:">
        <n-checkbox v-model:checked="form.inPlace">
          In-place Editing (-i)
        </n-checkbox>
        <n-checkbox v-model:checked="form.extendedRegex">
          Extended Regex (-E)
        </n-checkbox>
        <n-checkbox v-model:checked="form.suppressPrint">
          Suppress Automatic Printing (-n)
        </n-checkbox>
      </n-form-item>

      <n-form-item label="Target File">
        <n-input v-model:value="form.targetFile" placeholder="e.g., file.txt" />
      </n-form-item>

      <c-card title="Generated Sed command:" mt-3>
        <textarea-copyable :value="sedCommand" />
      </c-card>
    </n-form>
  </div>
</template>
