import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-folders',
  template: `
    <div class="max-w-lg mx-auto">
      <div class="mt-10">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Team members previously added to projects
        </h3>
        <ul
          role="list"
          class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          <li class="py-4 flex items-center justify-between space-x-3">
            <div class="min-w-0 flex-1 flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900 truncate">
                  Lindsay Walton
                </p>
                <p class="text-sm font-medium text-gray-500 truncate">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button
                type="button"
                class="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <!-- Heroicon name: solid/plus-sm -->
                <svg
                  class="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">
                  Invite <span class="sr-only">Lindsay Walton</span>
                </span>
              </button>
            </div>
          </li>

          <li class="py-4 flex items-center justify-between space-x-3">
            <div class="min-w-0 flex-1 flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900 truncate">
                  Courtney Henry
                </p>
                <p class="text-sm font-medium text-gray-500 truncate">
                  Designer
                </p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button
                type="button"
                class="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <!-- Heroicon name: solid/plus-sm -->
                <svg
                  class="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">
                  Invite <span class="sr-only">Courtney Henry</span>
                </span>
              </button>
            </div>
          </li>

          <li class="py-4 flex items-center justify-between space-x-3">
            <div class="min-w-0 flex-1 flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900 truncate">
                  Tom Cook
                </p>
                <p class="text-sm font-medium text-gray-500 truncate">
                  Director, Product Development
                </p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <button
                type="button"
                class="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <!-- Heroicon name: solid/plus-sm -->
                <svg
                  class="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">
                  Invite <span class="sr-only">Tom Cook</span>
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
