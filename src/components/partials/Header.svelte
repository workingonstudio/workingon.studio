<script lang="ts">
  let navItems = [
    {
      icon: "carbon:delivery-parcel",
      href: "/projects/",
      title: "projects",
      subtitle: ".list",
      description: "live studio projects.",
    },
    {
      icon: "carbon:piggy-bank-slot",
      href: "/finances",
      title: "finances",
      subtitle: ".csv",
      description: "financials in/out of the studio.",
    },
    {
      icon: "carbon:branch",
      href: "/progress",
      title: "progress",
      subtitle: ".git",
      description: "every update, every change.",
    },
    {
      icon: "carbon:flagging-taxi",
      href: "/contact",
      title: "contact",
      subtitle: ".mail",
      description: "bother me with admin.",
    },
  ];

  let socials = [
    {
      icon: "fa7-brands:threads",
      title: "Follow on Threads",
      href: "https://www.threads.com/@workingon.studio",
    },
    {
      icon: "fa7-brands:square-linkedin",
      title: "Follow on LinkedIn",
      href: "https://www.linkedin.com/company/workingonstudio/about/",
    },
    {
      icon: "fa7-brands:github",
      title: "Follow on Github",
      href: "https://github.com/workingonstudio",
    },
  ];
</script>

<div class="sticky top-0 bg-gray-950/80 backdrop-blur-sm">
  <header class="group flex flex-row items-center justify-between py-12">
    <a href="/" class="cursor-pointer">
      <!-- prettier-ignore -->
      <h1 class="font-display inline-block text-xl">workingon<span>.studio</span></h1>
    </a>
    <ul class="social flex flex-row gap-4">
      {#each socials as { icon, href, title }}
        <li><a {href} aria-label={title} {title}><iconify-icon {icon} class="text-md"></iconify-icon></a></li>
      {/each}
    </ul>
  </header>
  <nav class="flex flex-col items-start border-y-1 border-slate-900 py-6 text-xs">
    <ul class="flex w-full flex-row">
      {#each navItems as { icon, href, title, subtitle, description }}
        <li class="group">
          <iconify-icon {icon} class="text-lg text-gray-500"></iconify-icon>
          <a {href}>
            <!-- prettier-ignore -->
            <h2>{title}<span>{subtitle}</span></h2>
            <p>{description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  @reference "@styles/global.css";
  h1 {
    @apply text-xl;
  }
  h2 {
    @apply text-base;
  }
  h1 span {
    @apply text-shadow-glow motion-safe:animate-flicker sm:group-hover:text-shadow-glow sm:group-hover:motion-safe:animate-flicker text-sm text-yellow-300 sm:text-gray-500 sm:text-shadow-none sm:group-hover:text-yellow-300 sm:motion-safe:animate-none;
  }

  h2 span {
    @apply group-hover:text-shadow-glow group-hover:motion-safe:animate-flicker text-xs text-gray-500 group-hover:text-yellow-300;
  }

  nav {
    ul {
      @apply justify-between gap-6;
      li {
        @apply flex flex-row items-center gap-4 transition-opacity duration-300;
        a {
          @apply flex w-full flex-col justify-between gap-1;
          p {
            @apply text-body text-xs;
          }
        }
      }
    }
    &:has(li:hover) li:not(:hover) {
      @apply opacity-30 delay-100;
    }
  }

  .social {
    li {
      a {
        @apply text-muted;
        &:hover {
          @apply text-primary transition-colors duration-300;
        }
      }
    }
  }
</style>
