<template>
  <v-chip 
    small
    class="grey"
    :class="{'winner': isWinner, 'loser': isLoser, 'died': isDied}"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon size="16" left>{{ icon }}</v-icon> <b>{{ fighter }}</b>
  </v-chip>
</template>
<script>
  export default {
    name: "WinChip",

    props: ['isWinner', 'isLoser', 'isDied', 'fighter', 'isDrawn'],

    computed: {
      icon () {
        let icon = 'mdi-border-none-variant'
        if (this.isLoser) {
          icon = 'mdi-skull-crossbones-outline'
        }
        if (this.isDied) {
          icon = 'mdi-skull-crossbones'
        }
        if (this.isWinner) {
          icon = 'mdi-trophy-outline'
        }
        if (this.isDrawn) {
          icon = 'mdi-octagon-outline'
        }
        return icon
      }
    }
  }
</script>