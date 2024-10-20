<script setup lang="ts">

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
                <a class="text-base font-smedium text-gray-900 hover:text-primary-active" href="html/demo1/account/billing/basic.html">
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
              <a class="btn btn-primary" href="html/demo1/network/user-cards/mini-cards.html">
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

  <div class="drawer drawer-end flex flex-col max-w-[90%] w-[600px]" data-drawer="true" id="drawer_1">
    <div class="flex items-center justify-between p-5 border-b">
      <h3 class="text-base font-semibold text-gray-900">
        Drawer Title
      </h3>
      <button class="btn btn-xs btn-icon btn-light" data-drawer-dismiss="true">
        <i class="ki-outline ki-cross">
        </i>
      </button>
    </div>
    <div class="p-5">
      <div class="w-full">
        <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
          <label class="form-label flex items-center gap-1 max-w-32">
            Назва магазину
            <span class="text-danger">
              *
            </span>
          </label>
          <input class="input" name="name" placeholder="Enter email address" type="text" value=""/>
        </div>
      </div>
    </div>
  </div>
</template>