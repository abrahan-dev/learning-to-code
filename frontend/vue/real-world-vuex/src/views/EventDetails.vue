<template>
  <div v-if="event.title">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  data() {
    return {
      event: null
    }
  },
  props: ['id'],
  created() {
    this.event = EventService.getEvent(this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>
