<script lang="ts">
  interface Skill {
    icon: string;
    header: string;
    body: string;
    order: number;
  }

  interface Props {
    skill: Skill;
  }

  let { skill }: Props = $props();
</script>

<div class="flex flex-col gap-4">
  <iconify-icon icon={skill.icon} class="text-primary size-6 text-2xl"></iconify-icon>
  <div class="flex flex-col gap-1.5">
    <h3 class="skill-card__header">{skill.header}</h3>
    <p class="skill-card__body">{skill.body}</p>
  </div>
</div>

<style>
  @reference "@styles/main.css";
  h3 {
    @apply text-lg;
  }
  p {
    @apply text-xs;
  }
</style>
