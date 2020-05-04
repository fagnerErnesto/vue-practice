<template>
    <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div> &copy; {{ vueCourse }}</div>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            vueCourse: "Vue Course " + new Date().getFullYear()
        }
    }
}
</script>