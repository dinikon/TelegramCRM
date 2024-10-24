<script setup lang="ts">

const shopType = {
  1: "Prom",
  2: "WooCommerce"
}

</script>

<template>
  <div class="container-fixed">
    <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-xl font-medium leading-none text-gray-900">
          Центр продажів
        </h1>
        <div class="flex items-center gap-2 text-sm font-normal text-gray-700">
          Збирай замовлення з різних джерел
        </div>
      </div>
      <div class="flex items-center gap-2.5">
        <button class="btn btn-sm btn-light" data-drawer-toggle="#drawer_1">
          Додати інтеграцію
        </button>
      </div>
    </div>
  </div>

  <div class="container-fixed">
    <div class="grid gap-5 lg:gap-7.5">
      <!-- begin: cards -->
      <div id="integrations_cards">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
          <div class="card">
            <div class="card-body p-5 lg:p-7.5">
              <div class="flex items-center justify-between mb-3 lg:mb-5">
                <div class="flex items-center justify-center">
                  <img alt="" class="h-11 shrink-0" src="/media/brand-logos/jira.svg"/>
                </div>
                <div class="btn btn-sm btn-icon btn-clear btn-light">
                  <i class="ki-filled ki-exit-right-corner">
                  </i>
                </div>
              </div>
              <div class="flex flex-col gap-1 lg:gap-2.5">
                <a class="text-base font-medium text-gray-900 hover:text-primary-active">
                  Jira
                </a>
                <span class="text-2sm text-gray-700">
             Project management for agile teams, tracking issues and tasks.
            </span>
              </div>
            </div>
            <div class="card-footer justify-between items-center py-3.5">
              <a class="btn btn-light btn-sm">
                <i class="ki-filled ki-mouse-square">
                </i>
                Connect
              </a>
              <div class="flex items-center gap-2.5">
                <div class="switch">
                  <input checked="" name="param" type="checkbox" value="1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end: cards -->
      <div class="card">
        <div class="card-body flex flex-col items-center gap-2.5 py-7.5">
          <div class="flex justify-center p-7.5 py-9">
            <img alt="image" class="dark:hidden max-h-[230px]" src="/media/illustrations/28.svg"/>
            <img alt="image" class="light:hidden max-h-[230px]" src="/media/illustrations/28-dark.svg"/>
          </div>
          <div class="flex flex-col gap-5 lg:gap-7.5">
            <div class="flex flex-col gap-3 text-center">
              <h2 class="text-1.5xl font-semibold text-gray-900">
                Add New Integration
              </h2>
              <p class="text-sm text-gray-800">
                Explore New Integration: Expand Your Toolkit with Cutting-Edge,
                <br/>
                User-Friendly Solutions Tailored for Efficient and Innovative Project Management.
              </p>
            </div>
            <div class="flex justify-center mb-5">
              <a class="btn btn-primary">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            FAQ
          </h3>
        </div>
        <div class="card-body py-3">
          <div data-accordion="true" data-accordion-expand-all="true">
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_1_content">
            <span class="text-base text-gray-900">
             How is pricing determined for each plan ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_1_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision.
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision.
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_2_content">
            <span class="text-base text-gray-900">
             What payment methods are accepted for subscriptions ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_2_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_3_content">
            <span class="text-base text-gray-900">
             Are there any hidden fees in the pricing ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_3_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_4_content">
            <span class="text-base text-gray-900">
             Is there a discount for annual subscriptions ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_4_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_5_content">
            <span class="text-base text-gray-900">
             Do you offer refunds on subscription cancellations ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_5_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
            <div class="accordion-item [&:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
              <button class="accordion-toggle py-4" data-accordion-toggle="#faq_6_content">
            <span class="text-base text-gray-900">
             Can I add extra features to my current plan ?
            </span>
                <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                </i>
                <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                </i>
              </button>
              <div class="accordion-content hidden" id="faq_6_content">
                <div class="text-gray-700 text-md pb-4">
                  Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing helps you make an informed decision
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="drawer drawer-end flex flex-col max-w-[90%] w-[90%]" data-drawer="true" id="drawer_1">
    <div class="flex items-center justify-between p-5 border-b">
      <h3 class="text-base font-semibold text-gray-900">
        Додати нове джерело
      </h3>
      <button class="btn btn-xs btn-icon btn-light" data-drawer-dismiss="true">
        <i class="ki-outline ki-cross">
        </i>
      </button>
    </div>
    <div class="scrollable-y py-5 xl:py-7.5">
      <div class="container-fixed">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-7.5">
          <div class="xl:col-span-2">
            <div class="flex flex-col gap-5 xl:gap-7.5">
              <div class="card pb-2.5">
                <div class="card-header" id="webhooks">
                  <h3 class="card-title">
                    Джерело
                  </h3>
                </div>
                <div class="card-body grid gap-5">
                  <p class="text-2sm text-gray-800">
                    Set up Webhooks to trigger actions on external services in real-time. Stay informed on updates and changes to
                    <br>
                    ensure seamless integration.
                  </p>
                  <div class="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label class="form-label max-w-56">
                      Назва джерела
                    </label>
                    <div class="grow">
                      <input class="input" placeholder="Enter URL" type="text" value="">
                    </div>
                  </div>
                  <div class="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label class="form-label max-w-56">
                      Event Type
                    </label>
                    <div class="grow">
                      <select class="select">
                        <option>
                          Select option
                        </option>
                        <option v-for="(value, key) in shopType" :key="key" :value="value">
                          {{ value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label class="form-label max-w-56">
                      Webhook Name
                    </label>
                    <div class="grow">
                      <input class="input" placeholder="" type="text" value="CostaRicaHook">
                    </div>
                  </div>
                  <div class="flex items-center flex-wrap lg:flex-nowrap gap-2.5">
                    <label class="form-label max-w-56">
                      Event Type
                    </label>
                    <div class="grow">
                      <select class="select">
                        <option>
                          All Events
                        </option>
                        <option>
                          Push Webhooks
                        </option>
                        <option>
                          Pipe Webhook
                        </option>
                        <option>
                          Plugin Webhooks
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="flex items-center flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
                    <label class="form-label max-w-56">
                      Custom Headers
                    </label>
                    <div class="grow">
                      <label class="switch">
                <span class="switch-label">
                 Use Custom Header
                </span>
                        <input  type="checkbox" value="1">
                      </label>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <button class="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">
                    FAQ
                  </h3>
                </div>
                <div class="card-body py-3">
                  <div data-accordion="true" data-accordion-expand-all="true">
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_1_content">
                <span class="text-base text-gray-900">
                 How is pricing determined for each plan ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_1_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision.
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision.
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_2_content">
                <span class="text-base text-gray-900">
                 What payment methods are accepted for subscriptions ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_2_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_3_content">
                <span class="text-base text-gray-900">
                 Are there any hidden fees in the pricing ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_3_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_4_content">
                <span class="text-base text-gray-900">
                 Is there a discount for annual subscriptions ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_4_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_5_content">
                <span class="text-base text-gray-900">
                 Do you offer refunds on subscription cancellations ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_5_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item [&amp;:not(:last-child)]:border-b border-b-gray-200" data-accordion-item="true">
                      <button class="accordion-toggle py-4" data-accordion-toggle="#faq_6_content">
                <span class="text-base text-gray-900">
                 Can I add extra features to my current plan ?
                </span>
                        <i class="ki-filled ki-plus text-gray-600 text-sm accordion-active:hidden block">
                        </i>
                        <i class="ki-filled ki-minus text-gray-600 text-sm accordion-active:block hidden">
                        </i>
                      </button>
                      <div class="accordion-content hidden" id="faq_6_content">
                        <div class="text-gray-700 text-md pb-4">
                          Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget.
                          Understanding the factors influencing each plan's pricing helps you make an informed decision
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body px-10 py-7.5 lg:pr-12.5">
                  <div class="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
                    <div class="flex flex-col items-start gap-3">
                      <h2 class="text-1.5xl font-medium text-gray-900">
                        Contact Support
                      </h2>
                      <p class="text-sm text-gray-800 leading-5.5 mb-2.5">
                        Need assistance? Contact our support team for prompt, personalized help your queries &amp; concerns.
                      </p>
                    </div>
                    <img alt="image" class="dark:hidden max-h-[150px]" src="/media/illustrations/31.svg">
                    <img alt="image" class="light:hidden max-h-[150px]" src="/media/illustrations/31-dark.svg">
                  </div>
                </div>
                <div class="card-footer justify-center">
                  <a class="btn btn-link" href="">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-1">
            <div class="flex flex-col gap-5 xl:gap-7.5">
              <div class="card">
                <div class="card-body py-10 flex flex-col gap-5 lg:gap-7.5">
                  <div class="flex flex-col items-start gap-2.5">
                    <div class="mb-2.5">
                      <div class="relative size-[50px] shrink-0">
                        <svg class="w-full h-full stroke-brand-clarity fill-brand-light" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
        18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
        39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                          </path>
                          <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
        18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
        39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                          </path>
                        </svg>
                        <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                          <i class="ki-filled ki-cloud-add text-1.5xl ps-px text-brand">
                          </i>
                        </div>
                      </div>
                    </div>
                    <a class="text-base font-semibold text-gray-900 hover:text-primary" href="#">
                      Streamlined Alerts Setup: Custom Notification Preferences
                    </a>
                    <p class="text-sm text-gray-700">
                      Easily integrate and manage your APIs with our suite of configuration tools.
                      Gain access to extensive instructions, expert support, and in-depth documentation
                      to keep your API interactions efficient and up-to-date..
                    </p>
                    <a class="btn btn-link flex-none" href="#">
                      Learn more
                    </a>
                  </div>
                  <span class="hidden [&amp;:not(:last-child)]:block [&amp;:not(:last-child)]:border-b border-b-gray-200">
             </span>
                  <div class="flex flex-col items-start gap-2.5">
                    <div class="mb-2.5">
                      <div class="relative size-[50px] shrink-0">
                        <svg class="w-full h-full stroke-brand-clarity fill-brand-light" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
        18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
        39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                          </path>
                          <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
        18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
        39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                          </path>
                        </svg>
                        <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                          <i class="ki-filled ki-icon text-1.5xl ps-px text-brand">
                          </i>
                        </div>
                      </div>
                    </div>
                    <a class="text-base font-semibold text-gray-900 hover:text-primary" href="#">
                      Enhancing Connectivity: Tools for API Expansion
                    </a>
                    <p class="text-sm text-gray-700">
                      Leverage the full potential of your APIs with our advanced expansion tools. We provide
                      all the necessary resources for easy setup, information exchange, and maintaining
                      high-performance API connectivity.
                    </p>
                    <a class="btn btn-link flex-none" href="#">
                      Learn more
                    </a>
                  </div>
                  <span class="hidden [&amp;:not(:last-child)]:block [&amp;:not(:last-child)]:border-b border-b-gray-200">
             </span>
                  <div class="flex flex-col items-start gap-2.5">
                    <div class="mb-2.5">
                      <div class="relative size-[50px] shrink-0">
                        <svg class="w-full h-full stroke-brand-clarity fill-brand-light" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
        18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
        39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                          </path>
                          <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
        18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
        39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                          </path>
                        </svg>
                        <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
                          <i class="ki-filled ki-subtitle text-1.5xl ps-px text-brand">
                          </i>
                        </div>
                      </div>
                    </div>
                    <a class="text-base font-semibold text-gray-900 hover:text-primary" href="#">
                      Organizing Team Data: Efficient Roster Solutions
                    </a>
                    <p class="text-sm text-gray-700">
                      Organize your API data more with our detailed interface solutions. From quick setup
                      guides to management, our tools are designed to streamline every step of your API data organization.
                    </p>
                    <a class="btn btn-link flex-none" href="#">
                      Learn more
                    </a>
                  </div>
                  <span class="hidden [&amp;:not(:last-child)]:block [&amp;:not(:last-child)]:border-b border-b-gray-200">
             </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-4 border-t p-5">
      <button class="btn btn-light" data-drawer-dismiss="true">
        Cancel
      </button>
      <button class="btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</template>

<!--<style>-->
<!--.user-access-bg {-->
<!--  background-image: url('/media/images/2600x1200/bg-5.png');-->
<!--}-->
<!--.dark .user-access-bg {-->
<!--  background-image: url('/media/images/2600x1200/bg-5-dark.png');-->
<!--}-->
<!--</style>-->