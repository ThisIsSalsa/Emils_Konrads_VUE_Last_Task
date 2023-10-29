<template>
  <div class="about-me">
    <h1 style="color: white;">About Me</h1>
    <button :class="{ active: editMode }" @click="toggleEditMode">
      {{ editMode ? 'CANCEL' : 'EDIT FORM' }}
    </button>
    <FormComponent :disabled="!editMode" />
  </div>
</template>

<script>
import FormComponent from './FormComponent.vue';

export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      user: {
        name: 'Emīls',
        surname: 'Konrāds',
        code: 'IT18013',
      },
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  },
};
</script>

<style scoped>
.about-me {
  width: 300px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #8645E8;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #D7B8FF;
}

.form-component {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>