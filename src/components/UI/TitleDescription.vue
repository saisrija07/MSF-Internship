<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex">
        <h3 class="text-xl font-semibold text-gray-900">
          <slot name="title"></slot>
        </h3>
        <div class="ml-2">
          <slot v-if="$slots.badge" name="badge"></slot>
        </div>
      </div>

      <p class="mt-2 text-gray-600">
        <slot v-if="$slots.description" name="description"></slot>
      </p>
    </div>
</template>
