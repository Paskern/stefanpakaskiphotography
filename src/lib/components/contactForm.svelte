<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Select from '$lib/components/ui/select/index';
	import { contactSchema, type ContactSchema } from '$lib/schema/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import IconCalendar from '~icons/ph/calendar-blank';
	import {
		DateFormatter,
		type DateValue,
		getLocalTimeZone,
		parseDate,
		today
	} from '@internationalized/date';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils';
	import { Calendar } from '$lib/components/ui/calendar/index';
	import * as Popover from '$lib/components/ui/popover/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { toast } from 'svelte-sonner';

	const df = new DateFormatter('nb-NO', { dateStyle: 'long' });

	let value = $state<DateValue>();

	const { data } = $props<{ data: SuperValidated<Infer<ContactSchema>> }>();

	const form = superForm(data, {
		validators: zodClient(contactSchema),
		onUpdated: ({ form: f }) => {
			if (f.valid) {
				toast.success('Melding sendt!', { duration: 5000 });
			} else {
				toast.error('Noe gikk galt!', { duration: 5000 });
			}
		}
	});

	const { form: formData, enhance } = form;

	$effect(() => {
		value = $formData.date ? parseDate($formData.date) : undefined;
	});

	let placeholder = $state(today(getLocalTimeZone()));
</script>

<form method="POST" use:enhance class="w-full">
	<Form.Field {form} name="name">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="font-bold">Navn</Form.Label>
				<Input {...props} bind:value={$formData.name} placeholder="Navn Navnesen" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="font-bold">E-post</Form.Label>
				<Input {...props} bind:value={$formData.email} placeholder="eksempel@epost.no" />
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="date" class="flex flex-col">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="font-bold">Dato</Form.Label>
				<Popover.Root>
					<Popover.Trigger {...props}>
						{#snippet child({ props })}
							<Button
								variant="outline"
								class={cn(
									'w-auto justify-start pl-4 text-left font-normal',
									!value && 'text-muted-foreground'
								)}
								{...props}
							>
								{value ? df.format(value.toDate(getLocalTimeZone())) : 'Velg dato'}
								<IconCalendar class="ml-auto size-4 opacity-50" />
							</Button>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content class="w-auto p-0" side="top">
						<Calendar
							type="single"
							{value}
							bind:placeholder
							calendarLabel="Dato"
							onValueChange={(v) => {
								if (v) {
									$formData.date = v.toString();
								} else {
									$formData.date = '';
								}
							}}
							fixedWeeks={true}
							locale="nb-NO"
						/>
					</Popover.Content>
				</Popover.Root>
				<Form.FieldErrors />
				<input hidden value={$formData.date} name={props.name} />
			{/snippet}
		</Form.Control>
	</Form.Field>

	<Form.Field {form} name="referral">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="font-bold">Hvor fant du meg?</Form.Label>
				<Select.Root type="single" bind:value={$formData.referral} name={props.name}>
					<Select.Trigger {...props}>
						{$formData.referral ? $formData.referral : 'Velg en kilde'}
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="Google" label="Google" />
						<Select.Item value="Instagram" label="Instagram" />
						<Select.Item value="Facebook" label="Facebook" />
						<Select.Item value="Via tidligere brudepar" label="Via tidligere brudepar" />
						<Select.Item value="Via annen fotograf" label="Via annen fotograf" />
						<Select.Item value="Annet" label="Annet" />
					</Select.Content>
				</Select.Root>
				<Form.FieldErrors />
			{/snippet}
		</Form.Control>
	</Form.Field>

	<Form.Field {form} name="message">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label class="font-bold">Melding</Form.Label>
				<Textarea
					{...props}
					bind:value={$formData.message}
					class="h-60"
					placeholder="Litt info om hvem dere er og hva dere ønsker for dagen deres"
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mt-4" type="submit">Send</Form.Button>
</form>
