<template>
  <div class="section-header">
    <div class="header-logo" v-if="event.logo_url">
      <a :href="event.webpage" :title="event.name" target="_blank">
        <img id="event-logo" :src="event.logo_url" />
      </a>
    </div>
    <div class="header-content">
      <a
        :href="event.webpage_url"
        target="_blank"
        title="Home page"
        v-if="event.webpage_url"
        class="btn"
      >
        🌐
      </a>
      <a
        :href="event.community_url"
        target="_blank"
        title="Community link"
        v-if="event.community_url"
        class="btn"
      >
        🗨️
      </a>
      <h3 class="event-name">
        {{ event.name }}
        <button
          v-if="isEditing"
          class="edit-btn"
          @click="$emit('editField', 'event', event, 'name', 'Event Name')"
        >
          ✏️
        </button>
      </h3>
      <span class="event-hostname" v-if="event.hostname">
        <i class="fa fa-bank">🏢</i>
        {{ event.hostname }}</span
      >
      <span class="event-location" v-if="event.location || isEditing">
        <i class="fa fa-map">🗺️</i>
        {{ event.location }}
        <button
          v-if="isEditing"
          class="edit-btn"
          @click="$emit('editField', 'event', event, 'location', 'Location')"
        >
          ✏️
        </button>
      </span>
      <p class="header-summary" v-if="event.summary || isEditing">
        {{ event.summary }}
        <button
          v-if="isEditing"
          class="edit-btn"
          @click="$emit('editField', 'event', event, 'summary', 'Event Summary')"
        >
          ✏️
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventHeader",
  props: {
    event: Object,
    isEditing: Boolean,
  },
  emits: ["editField"],
};
</script>

<style scoped>
/* -- Headline -- */

.dark .section-header {
  color: white;
}
.section-header {
  color: black;
}

.header-logo {
  display: block;
  float: none;
  margin: none;
}

.header-logo img {
  height: 6em;
  margin-bottom: 3em;
}

.header-logo {
  display: inline-block;
  float: left;
  margin-right: 2em;
}

@media (max-width: 768px) {
  #event-logo {
    max-width: 128px;
    max-height: 128px;
    margin-bottom: 1em;
  }
  .header-logo {
    display: block;
    float: none;
    margin: none;
  }
  .header-logo img {
    width: 100%;
    height: auto;
  }
  .header-content {
    padding-bottom: 2em;
  }
  .event-location {
    display: block;
  }
}

.event-name {
  font-weight: normal;
  font-size: 250%;
  margin: 0px;
  text-align: left;
  line-height: 1.2em;
  margin-bottom: 1pt;
  padding-bottom: 0.2em;
}

.header-content {
  text-align: left;
}
.header-content span {
  margin-right: 1em;
  opacity: 0.7;
}

.header-content .btn {
  text-decoration: none;
  box-shadow: none;
  float: right;
}

.header-summary {
  font-size: 90%;
  font-style: italic;
  text-align: left;
  margin-top: 0.5em;
  opacity: 0.7;
}

.edit-btn {
  background: none;
  border: none;
  box-shadow: none;
  font-size: 14px;
  cursor: pointer;
  padding: 2px;
  margin: 0;
  vertical-align: middle;
}

.edit-btn:hover {
  background: #eee;
}
</style>