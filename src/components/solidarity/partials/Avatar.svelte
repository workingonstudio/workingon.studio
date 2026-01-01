<script lang="ts">
  export let img: string = "/solidarity/avatars/paul.png";
  export let ring: boolean = false;
  export let dimensions: string = "size-14";
</script>

<div class="avatar relative {dimensions}">
  <img
    src="/solidarity/otw-overlay.webp"
    alt=""
    class="overlay pointer-events-none absolute {ring ? 'visible' : 'hidden'}"
  />
  <img src={img} alt="" />
</div>

<style>
  @reference "@styles/solidarity.css";
  .avatar {
    @apply rounded-full border-0 border-transparent;
    img {
      @apply rounded-full;
    }
  }

  .overlay {
    opacity: 0;
    transform: rotate(90deg);
  }

  .overlay.visible {
    animation: fadeSpinScaleIn 500ms cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;
  }

  .overlay.hidden {
    animation: fadeSpinScaleOut 500ms cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;
  }

  @keyframes fadeSpinScaleIn {
    from {
      opacity: 0;
      transform: rotate(90deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  @keyframes fadeSpinScaleOut {
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      opacity: 0;
      transform: rotate(90deg);
    }
  }
</style>
